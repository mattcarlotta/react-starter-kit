import React from "react";
import Helmet from "react-helmet";
import Link from "../../components/Link";
import ExampleIcon from "../../components/ExampleIcon";
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
      <Link style={{ marginTop: 10 }} to="/users">
        <ExampleIcon />
        <span>See Example</span>
      </Link>
    </div>
  </div>
);
