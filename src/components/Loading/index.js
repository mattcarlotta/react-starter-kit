import React from "react";
import PropTypes from "prop-types";
import ErrorDisplay from "../ErrorDisplay";
import styles from "./styles.scss";

const Loading = ({ pastDelay, error }) => {
  if (error)
    return <ErrorDisplay error={new Error("Failed to load component")} />;

  if (pastDelay)
    return (
      <div className={styles.Loading}>
        <p>Loading...</p>
      </div>
    );

  return null;
};

Loading.propTypes = {
  pastDelay: PropTypes.bool,
  error: PropTypes.string
};

export default Loading;
