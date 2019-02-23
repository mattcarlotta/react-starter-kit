/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import { app } from "./styles.scss";

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
  <div className={app}>
    <Helmet {...config} />
    {/* Child routes won't render without this */}
    {renderRoutes(routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.shapeOf({
    component: PropTypes.node,
    loadData: PropTypes.func,
    path: PropTypes.string
  })
};

export default hot(module)(App);
/* eslint-enable */
