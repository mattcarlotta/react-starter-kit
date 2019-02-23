import Loadable from "react-loadable";
import render from "./utils/client/renderApp";
import routes from "./routes";
import "./styles/globals/globals.scss";

//= =============================================================================//
// CLIENT-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

// react-loadable preloaded routes
Loadable.preloadReady().then(() => render(routes));
