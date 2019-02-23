import Loadable from "react-loadable";
import render from "./utils/client/renderApp";
import routes from "./routes";
import "./styles/globals/globals.scss";

//= =============================================================================//
// CLIENT-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

Loadable.preloadReady().then(() => render(routes)); // react-loadable preloaded routes
