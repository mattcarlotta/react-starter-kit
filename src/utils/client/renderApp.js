import React from "react";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
// import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import configureStore from "../../store/configureStore";
import routes from "../../routes";

//= =============================================================================//
// CLIENT-SIDE HOT LOADING, REDUX STATE, AND ROUTE SETUP                          /
//= =============================================================================//

const history = createBrowserHistory();
const initialState = window.__INITIAL_PROPS__; // grabbing the initial state from server-side
const store = configureStore(history, initialState);

/**
 * Factory function to hydrate the client-side DOM
 * @function render
 */
const render = () => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

export default render;
