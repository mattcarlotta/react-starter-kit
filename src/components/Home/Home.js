import React from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import logo from "../../styles/assets/images/ssrLogoLight.png";
import { homeContainer, logoContainer, logoStyle, textInfo } from "./Home.scss";

export default () => (
  <div className={homeContainer}>
    <Helmet title="Home" />
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={textInfo}>Webpack SSR Boilerplate</h1>
      <h1 className={textInfo}>Edit ./components and save to reload.</h1>
      <NavLink to="/users">See Example</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  </div>
);
