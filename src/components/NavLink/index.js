import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { linkStyle } from "./styles.scss";

const StyledLink = ({ children, to }) => (
  <NavLink className={linkStyle} to={to}>
    {children}
  </NavLink>
);

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default StyledLink;
