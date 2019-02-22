/* eslint-disable */
import React from "react";
import ErrorDisplay from "../ErrorDisplay";
import styles from "./styles.scss";

const Loading = ({ pastDelay, error }) => {
  if (error) return <ErrorDisplay error={err.toString()} />;

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
