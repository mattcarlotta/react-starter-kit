import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, children, onClick, style, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={className} onClick={onClick} style={style}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

export default Button;
