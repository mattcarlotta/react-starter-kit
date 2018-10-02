import React from 'react';
import logo from '../../images/logo.svg';
import { app, logoContainer, logoStyle, title } from '../../styles/index.css';

const Home = () => (
  <div className={app}>
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={title}>Webpack React Boilerplate</h1>
      <h1 className={title}>Edit /home/index.js and save to reload.</h1>
    </div>
  </div>
);

export default Home;
