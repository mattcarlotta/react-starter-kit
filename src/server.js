import express from "express";
import middlewares from "./utils/server/middlewares";
import setupDevServer from "./utils/server/setupDevServer";
import serveProdAssets from "./utils/server/serveProdAssets";
import serveReact from "./utils/server/serveReact";
import startServer from "./utils/server/startServer";
import { inDevelopment } from "../envs/envs";

//= =============================================================================//
// SERVER-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

const app = express();

// express middlewares
middlewares(app);

// serves production assets or set up a dev server
if (!inDevelopment) {
  serveProdAssets(app);
} else {
  setupDevServer(app);
}

// handles server-side routing
serveReact(app);

// starts express server
startServer(app);
