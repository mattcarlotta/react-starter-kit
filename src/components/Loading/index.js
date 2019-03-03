/* eslint-disable */
import React from "react";
import ErrorDisplay from "../ErrorDisplay";
import { loadingContainer } from "./styles.scss";

const Loading = ({ pastDelay, error }) => {
  if (error) return <ErrorDisplay error={error.toString()} />;

  if (pastDelay)
    return (
      <div className={loadingContainer}>
        <p>Loading...</p>
      </div>
    );

  return null;
};

export default Loading;
/* eslint-enable */
