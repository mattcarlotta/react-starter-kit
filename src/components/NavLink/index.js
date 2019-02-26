import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { linkStyle } from "./styles.scss";

const StyledLink = ({ children, link }) => (
  <NavLink className={linkStyle} to={link}>
    {children}
  </NavLink>
);

StyledLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default StyledLink;
