/* eslint-disable */
import React from "react";
import Helmet from "react-helmet";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import { appContainer } from "./styles.scss";

const config = {
  htmlAttributes: { lang: "en" },
  title: "Webpack-React-Boilerplate",
  titleTemplate: "SSR - %s",
  meta: [
    {
      name: "description",
      content: "The best react universal starter boilerplate in the world."
    }
  ]
};

export const App = ({ route: { routes } }) => (
  <div className={appContainer}>
    <Helmet {...config} />
    {renderRoutes(routes)}
  </div>
);

export default hot(module)(App);
/* eslint-enable */
