import React from 'react';
import logo from '../../images/mernLogo.png';
import { app, logoContainer, logoStyle, title } from '../../styles/index.css';

const Home = () => (
  <div className={app}>
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={title}>Webpack FullStack Boilerplate</h1>
    </div>
  </div>
);

export default Home;
