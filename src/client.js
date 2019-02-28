import Loadable from "react-loadable";
import render from "./utils/client/renderApp";
// import routes from "./routes";
import "./styles/globals/globals.scss";

//= =============================================================================//
// CLIENT-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

Loadable.preloadReady().then(() => render()); // react-loadable preloaded routes

// Enable webpack hot module replacement for routes
if (module.hot) {
  module.hot.accept("./routes", () => {
    try {
      render();
    } catch (error) {
      console.error(`Hot reloading error: ${error}`);
    }
  });
}
