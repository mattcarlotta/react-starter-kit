import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";

//= =============================================================================//
// CLIENT-SIDE HOT LOADING, REDUX STATE, AND ROUTE SETUP                          /
//= =============================================================================//

/**
 * Factory function to hydrate the client-side DOM
 * @function render
 */
const renderApp = (routes, history, store) => {
  const renderMethod = module.hot ? render : hydrate;
  renderMethod(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

export default renderApp;
