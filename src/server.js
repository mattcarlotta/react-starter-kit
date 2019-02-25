import express from "express";
import middlewares from "./utils/server/middlewares";
import setupDevServer from "./utils/server/setupDevServer";
import serveProdAssets from "./utils/server/serveProdAssets";
import serveReact from "./utils/server/serveReact";
import startServer from "./utils/server/startServer";
import { inDevelopment } from "../envs";

const app = express();

//= =============================================================================//
// SERVER-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

middlewares(app); // express middlewares

if (!inDevelopment) {
  serveProdAssets(app); // serves production assets
} else {
  setupDevServer(app); // set up a dev server
}

serveReact(app); // handles server-side routing

startServer(app); // starts express server
