import express from "express";
import Loadable from "react-loadable";
import chalk from "chalk";
import openBrowser from "react-dev-utils/openBrowser";
import middlewares from "./utils/server/middlewares";
import setupDevServer from "./utils/server/setupDevServer";
import serveProdAssets from "./utils/server/serveProdAssets";
import serveReact from "./utils/server/serveReact";

const port = process.env.PORT;
const host = process.env.NODE_HOST || "localhost";
const app = express();

// express middlewares
middlewares(app);

// express will serve production assets or set up a dev server
if (!__DEV__) {
  serveProdAssets(app);
} else {
  setupDevServer(app);
}

// server-side rendering
serveReact(app);

// start express server
Loadable.preloadAll().then(() => {
  app.listen(port, host, err => {
    if (!err) {
      const url = `http://${host}:${port}`;
      openBrowser(url);
    } else {
      console.error(chalk.red(err));
    }
  });
});
