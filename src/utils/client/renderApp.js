import React from "react";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import configureStore from "../../store/configureStore";

//= =============================================================================//
// CLIENT-SIDE HOT LOADING, REDUX STATE, AND ROUTE SETUP                          /
//= =============================================================================//

const history = createBrowserHistory();
const initialState = window.__INITIAL_PROPS__; // grabbing the initial state from server-side
const store = configureStore(history, initialState);

/**
 * Factory function to hydrate the client-side DOM
 * @function render
 * @param {node} Component - Routes to be rendered
 */
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

// Enable webpack hot module replacement for routes
if (module.hot) {
  module.hot.accept("../../routes", () => {
    try {
      const nextRoutes = require("../../routes").default;

      render(nextRoutes);
    } catch (error) {
      console.error(`Hot reloading error: ${error}`);
    }
  });
}

export default render;
