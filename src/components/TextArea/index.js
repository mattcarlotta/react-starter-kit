import React from "react";
import PropTypes from "prop-types";
import FieldError from "../FieldError";
import {
  hasFieldError,
  labelStyle,
  textAreaContainer,
  textAreaStyle
} from "./styles.scss";

const TextArea = ({
  hasError,
  isRequired,
  name,
  label,
  onHandleChange,
  value,
  style
}) => (
  <div style={style} className={textAreaContainer}>
    <label className={labelStyle} htmlFor={name}>
      {label}
    </label>
    <textarea
      id={name}
      className={`${textAreaStyle} ${
        hasError && isRequired ? hasFieldError : ""
      }`}
      name={name}
      value={value}
      onChange={onHandleChange}
    />
    <FieldError hasError={hasError} isRequired={isRequired} />
  </div>
);

TextArea.propTypes = {
  hasError: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

export default TextArea;
