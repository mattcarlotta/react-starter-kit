import React from "react";
import Helmet from "react-helmet";
import Link from "../../components/Link";
import { notfound, notfoundContainer } from "./styles.scss";

export default () => (
  <div className={notfoundContainer}>
    <Helmet title="Page Not Found" />
    <div className={notfound}>
      <h1>404 - Page Not Found!</h1>
      <Link to="/">Go Back</Link>
    </div>
  </div>
);
