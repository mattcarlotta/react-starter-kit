import { resolve } from "path";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import hpp from "hpp";
import favicon from "serve-favicon";

const { cwd } = process;

export default app => {
  // Use helmet to secure Express with various HTTP headers
  app.use(helmet());
  // Prevent HTTP parameter pollution
  app.use(hpp());
  // Compress all requests
  app.use(compression());
  // XHR requests logger
  app.use(morgan("tiny"));
  // Serves favicon
  app.use(favicon(resolve(cwd(), "public", "favicon.ico")));
};
