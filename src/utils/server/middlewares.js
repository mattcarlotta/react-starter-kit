import { resolve } from "path";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import hpp from "hpp";
import favicon from "serve-favicon";

const { cwd } = process;

//= =============================================================================//
//  SERVER-SIDE EXPRESS MIDDLEWARES                                               /
//= =============================================================================//

export default app => {
  app.use(helmet()); // uses helmet to secure Express with various HTTP headers
  app.use(hpp()); // prevents HTTP parameter pollution
  app.use(compression()); // compresses all requests
  app.use(morgan("tiny")); // logs XHR requests
  app.use(favicon(resolve(cwd(), "public", "favicon.ico"))); // serves favicon
};
