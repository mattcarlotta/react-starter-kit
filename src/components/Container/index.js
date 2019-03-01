import React from "react";
import PropTypes from "prop-types";
import { animation, container, grid } from "./styles.scss";

const Container = ({ animated, children }) => (
  <div className={container}>
    <div className={`${grid} ${animated ? animation : ""}`}>{children}</div>
  </div>
);

Container.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.node
};

export default Container;
