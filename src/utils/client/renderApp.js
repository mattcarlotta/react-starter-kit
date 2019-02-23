import React from "react";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
import { AppContainer, setConfig } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import configureStore from "../../store/configureStore";

setConfig({ pureSFC: true });
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

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept("../../routes", () => {
    try {
      const nextRoutes = require("../../routes").default;

      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}

export default render;
