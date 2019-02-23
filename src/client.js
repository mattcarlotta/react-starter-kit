import React from "react";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import Loadable from "react-loadable";

import configureStore from "./store/configureStore";
import routes from "./routes";

import "normalize.css/normalize.css";
import "./styles/globals/globals.scss";

const history = createBrowserHistory();
// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const store = configureStore(history, initialState);

const render = Routes => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {renderRoutes(Routes)}
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

// react-loadable setup
Loadable.preloadReady().then(() => render(routes));

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept("./routes", () => {
    try {
      const nextRoutes = require("./routes").default;

      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
