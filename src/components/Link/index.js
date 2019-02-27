import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkStyle } from "./styles.scss";

const StyledLink = ({ children, to }) => (
  <Link className={linkStyle} to={to}>
    {children}
  </Link>
);

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default StyledLink;
