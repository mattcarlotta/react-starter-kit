import Loadable from "react-loadable";
import render from "./utils/client/renderApp";
import routes from "./routes";

// global styles
import "./styles/globals/globals.scss";

// react-loadable preload routes
Loadable.preloadReady().then(() => render(routes));
