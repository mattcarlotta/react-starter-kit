import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const ErrorDisplay = ({ error }) => (
  <div className={styles.Error}>
    <p>Oops! {error.message}</p>
  </div>
);

ErrorDisplay.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorDisplay;
