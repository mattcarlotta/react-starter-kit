import React from "react";
import PropTypes from "prop-types";
import CloseButton from "../CloseButton";
import { errorContainer, errorStyle } from "./styles.scss";

const FormError = ({ hasError, onHandleClose }) =>
  hasError ? (
    <div className={errorContainer}>
      <CloseButton
        onClick={onHandleClose}
        style={{
          color: "#f5222d",
          position: "absolute",
          top: 13,
          right: 15
        }}
      />
      <p className={errorStyle}>{hasError}</p>
    </div>
  ) : null;

FormError.propTypes = {
  hasError: PropTypes.string,
  onHandleClose: PropTypes.func.isRequired
};

export default FormError;
