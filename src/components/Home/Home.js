import React from 'react';
import Helmet from 'react-helmet';
import logo from './assets/mernLogoSSR3.png';
import { homeContainer, logoContainer, logoStyle, textInfo } from './Home.scss';

export default () => (
  <div className={homeContainer}>
    <Helmet title="Home" />
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={textInfo}>Webpack SSR Boilerplate</h1>
      <h1 className={textInfo}>Edit ./components and save to reload.</h1>
    </div>
  </div>
);
