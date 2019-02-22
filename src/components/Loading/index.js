/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import ErrorDisplay from "../ErrorDisplay";
import styles from "./styles.scss";

const Loading = ({ pastDelay, error }) => {
  if (error) return <ErrorDisplay error="Failed to load component" />;

  if (pastDelay)
    return (
      <div className={styles.Loading}>
        <p>Loading...</p>
      </div>
    );

  return null;
};

export default Loading;
/* eslint-enable */
