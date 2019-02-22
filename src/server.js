/* @flow */

import { resolve } from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import Helmet from 'react-helmet';
import chalk from 'chalk';
import openBrowser from 'react-dev-utils/openBrowser';
import { createMemoryHistory } from 'history';

import configureStore from './store/configureStore';
import renderHtml from './utils/renderHtml';
import routes from './routes';

const { cwd } = process;
const port = process.env.PORT;
const host = process.env.NODE_HOST || 'localhost';

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution
app.use(hpp());
// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
// app.use(logger("dev", { skip: (req, res) => res.statusCode < 400 }));
app.use(morgan('tiny'));
app.use(favicon(resolve(cwd(), 'public', 'favicon.ico')));

if (!__DEV__) {
  app.use(express.static(resolve(cwd(), 'public')));
} else {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    quiet: true,
    noInfo: true,
    stats: 'errors-only',
    logLevel: 'silent',
    serverSideRender: true
  });

  const hotMiddleware = webpackHotMiddleware(compiler, {
    stats: 'errors-only',
    logLevel: 'silent',
    log: false,
    quiet: true,
    noInfo: true
  });

  app.use(devMiddleware);
  app.use(hotMiddleware);
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  const history = createMemoryHistory();
  const store = configureStore(history);

  // The method for loading data from server-side
  const loadBranchData = (): Promise<any> => {
    const branch = matchRoutes(routes, req.path);

    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({ params: match.params, getState: store.getState })
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
      await loadBranchData();

      const modules = [];
      const staticContext = {};
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
        res.status(301).setHeader('Location', staticContext.url);
        res.end();

        return;
      }

      // Check page status
      const status = staticContext.status === '404' ? 404 : 200;

      const head = Helmet.renderStatic();
      const initialState = store.getState();
      const htmlContent = renderToString(AppComponent);

      // $FlowFixMe: isn't an issue
      const loadableManifest = require('../public/loadable-assets.json');
      const bundles = getBundles(loadableManifest, modules);
      let assets = bundles
        .map(({ publicPath }) =>
          !publicPath.includes('main') ? publicPath : ''
        )
        // In development, main.css and main.js are webpack default file bundling name
        // we put these files into assets with publicPath
        .concat(['/assets/main.css', '/assets/main.js']);

      if (!__DEV__) {
        // $FlowFixMe: isn't an issue
        const webpackManifest = require('../public/webpack-assets.json');
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
        .send(renderHtml(head, assets, htmlContent, initialState));
    } catch (err) {
      res.status(404).send('Not Found :(');

      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (port) {
  Loadable.preloadAll().then(() => {
    app.listen(port, host, err => {
      if (!err) {
        const url = `http://${host}:${port}`;
        openBrowser(url);
      } else {
        console.error(chalk.red(err));
      }
    });
  });
} else {
  console.error(
    chalk.red('==> No PORT environment variable has been specified')
  );
}