import isNull from "lodash/isNull";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import { createMemoryHistory } from "history";
import Helmet from "react-helmet";
import chalk from "chalk";

import renderHtml from "./renderHtml";
import configureStore from "../../store/configureStore";
import routes from "../../routes";
import { inDevelopment } from "../../../envs";

//= =============================================================================//
// SERVER-SIDE ROUTING TO HANDLE ASSET CHUNKING AND DISPERSAL                     /
//= =============================================================================//

export default app => {
  app.get("*", async (req, res) => {
    const history = createMemoryHistory();
    const store = configureStore(history);

    const loadInitialState = () => {
      const branch = matchRoutes(routes, req.path);

      const promises = branch.map(({ route }) => {
        if (route.loadInitState) {
          return Promise.all(route.loadInitState());
        }
        return Promise.resolve();
      });

      return Promise.all(promises);
    };

    // The method for loading data from server-side
    const loadReduxData = () => {
      const branch = matchRoutes(routes, req.path);

      const promises = branch.map(({ route, match }) => {
        if (route.loadReduxStore) {
          return Promise.all(
            route
              .loadReduxStore({
                params: match.params,
                getState: store.getState
              })
              .map(item => store.dispatch(item))
          );
        }

        return Promise.resolve(null);
      });

      return Promise.all(promises);
    };

    (async () => {
      try {
        // Load data from server-side first
        await loadReduxData();
        const [, data] = await loadInitialState();
        const initialState = data && !isNull(data) ? { ...data[0].data } : {};

        const modules = [];
        const staticContext = initialState;
        const AppComponent = (
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <Provider store={store}>
              <StaticRouter location={req.path} context={staticContext}>
                {renderRoutes(routes)}
              </StaticRouter>
            </Provider>
          </Loadable.Capture>
        );

        // Check if the render result contains a redirect, if so we need to set
        // the specific status and redirect header and end the response
        if (staticContext.url) {
          res.status(301).setHeader("Location", staticContext.url);
          res.end();

          return;
        }

        // Check page status
        const status = staticContext.status === "404" ? 404 : 200;

        const head = Helmet.renderStatic();
        const initialProps = store.getState();
        const htmlContent = renderToString(AppComponent);

        const loadableManifest = require("../../../public/loadable-assets.json");
        const bundles = getBundles(loadableManifest, modules);
        let assets = bundles
          .map(({ publicPath }) =>
            !publicPath.includes("main") ? publicPath : ""
          )
          // In development, main.css and main.js are webpack default file bundling name
          // we put these files into assets with publicPath
          .concat(["/assets/main.css", "/assets/main.js"]);

        if (!inDevelopment) {
          const webpackManifest = require("../../../public/webpack-assets.json");
          assets = bundles
            .map(({ publicPath }) => publicPath)
            .concat(
              Object.keys(webpackManifest)
                .map(key => webpackManifest[key])
                .reverse()
            );
        }

        // Pass the route and initial state into html template
        res
          .status(status)
          .send(
            renderHtml(head, assets, htmlContent, initialState, initialProps)
          );
      } catch (err) {
        res.status(404).send("Not Found :(");

        console.error(chalk.red(`Rendering routes error: ${err}`));
      }
    })();
  });
};
