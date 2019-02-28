import React from "react";
import PropTypes from "prop-types";
import { errorStyle, hidden } from "./styles.scss";

const FieldError = ({ hasError, isRequired }) =>
  isRequired && hasError ? (
    <span className={errorStyle}>Required!</span>
  ) : (
    <span className={hidden}>&nbsp;</span>
  );

FieldError.propTypes = {
  hasError: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool
};

export default FieldError;
