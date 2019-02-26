import React from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import { notfound, notfoundContainer } from "./styles.scss";

export default () => (
  <div className={notfoundContainer}>
    <Helmet title="Page Not Found" />
    <div className={notfound}>
      <h1>404 - Page Not Found!</h1>
      <NavLink to="/">Go Back</NavLink>
    </div>
  </div>
);
