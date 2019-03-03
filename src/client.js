import Loadable from "react-loadable";
import { createBrowserHistory } from "history";
import render from "./utils/client/renderApp";
import routes from "./routes";
import configureStore from "./store/configureStore";
import "./styles/globals/globals.scss";

//= =============================================================================//
// CLIENT-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

const history = createBrowserHistory();
const initialState = window.__INITIAL_PROPS__;
delete window.__INITIAL_PROPS__;
const store = configureStore(history, initialState);

Loadable.preloadReady().then(() => render(routes, history, store)); // react-loadable preloaded routes

// Enable webpack hot module replacement for routes
if (module.hot) {
  module.hot.accept("./routes", () => {
    const nextRoutes = require("./routes").default;
    render(nextRoutes, history, store);
  });
}
