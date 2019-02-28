import React from "react";
import PropTypes from "prop-types";
import { buttonStyle } from "./styles.scss";

const Button = ({ children, type, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={buttonStyle} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
