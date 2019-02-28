import React from "react";
import Helmet from "react-helmet";
import Link from "../../components/Link";
import logo from "../../styles/assets/images/ssrLogoLight.png";
import {
  homeContainer,
  logoContainer,
  logoStyle,
  textInfo
} from "./styles.scss";

export default () => (
  <div className={homeContainer}>
    <Helmet title="Home" />
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={textInfo}>Webpack SSR Boilerplate</h1>
      <h1 className={textInfo}>Edit ./components and save to reload.</h1>
      <Link to="/users">See Example</Link>
    </div>
  </div>
);
