import express from "express";
import middlewares from "../middlewares";
import setupDevServer from "./utils/server/setupDevServer";
import serveProdAssets from "./utils/server/serveProdAssets";
import serveReact from "./utils/server/serveReact";
import startServer from "./utils/server/startServer";
import connectToDB from "../database";
import { inDevelopment } from "../envs";

const app = express();

//= =============================================================================//
// SERVER-SIDE RENDERING SETUP                                                    /
//= =============================================================================//

middlewares(app); // express middlewares
connectToDB(); // connect to mongodb

if (!inDevelopment) {
  serveProdAssets(app); // serves production assets
} else {
  setupDevServer(app); // set up a dev server
}

serveReact(app); // handles server-side routing

startServer(app); // starts express server
