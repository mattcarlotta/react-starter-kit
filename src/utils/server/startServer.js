import Loadable from "react-loadable";
import openBrowser from "react-dev-utils/openBrowser";
import chalk from "chalk";
import { HOST, PORT } from "../../../envs/envs";

export default app => {
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
};
