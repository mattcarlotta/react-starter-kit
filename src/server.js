import express from "express";
import Loadable from "react-loadable";
import chalk from "chalk";
import openBrowser from "react-dev-utils/openBrowser";
import middlewares from "./utils/server/middlewares";
import setupDevServer from "./utils/server/setupDevServer";
import serveProdAssets from "./utils/server/serveProdAssets";
import serveReact from "./utils/server/serveReact";
import { HOST, inDevelopment, PORT } from "../envs/envs";

const app = express();

// express middlewares
middlewares(app);

// express will serve production assets or set up a dev server
if (!inDevelopment) {
  serveProdAssets(app);
} else {
  setupDevServer(app);
}

// server-side rendering
serveReact(app);

// start express server
Loadable.preloadAll().then(() => {
  app.listen(PORT, HOST, err => {
    if (!err) {
      const url = `http://${HOST}:${PORT}`;
      openBrowser(url);
    } else {
      console.error(chalk.red(err));
    }
  });
});
