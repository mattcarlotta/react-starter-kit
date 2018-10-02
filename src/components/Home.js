import React, { Component } from 'react';
import Button from '../containers/Button';
import logo from '../images/logo.svg';
import { app, logoContainer, logoStyle } from '../styles/index.css';

class Home extends Component {
  state = { persist: '' };

  handleClick = () => this.setState({ persist: 'Persist React State' });

  render = () => (
    <div className={app}>
      <div className={logoContainer}>
        <img className={logoStyle} src={logo} alt="" />
        <h1 style={{ color: 'white' }}>Webpack React Boilerplate</h1>
        <h1 style={{ color: 'white' }}>
          Edit /home/inde.js and save to reload.
        </h1>
        <button type="button" onClick={this.handleClick}>
          Test State
        </button>
        <p>{this.state.persist}</p>
        <Button />
      </div>
    </div>
  );
}

export default Home;
