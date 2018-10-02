import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from '../containers/Button';
import logo from '../images/logo.svg';
import { app, logoContainer, logoStyle, title } from '../styles/index.css';

class Home extends Component {
  state = { persist: '' };

  handleClick = () => this.setState({ persist: 'Persist React State' });

  render = () => (
    <div className={app}>
      <div className={logoContainer}>
        <img className={logoStyle} src={logo} alt="" />
        <h1 className={title}>Webpack React Boilerplate</h1>
        <h1 className={title}>Edit /home/index.js and save to reload.</h1>
        <button type="button" onClick={this.handleClick}>
          Test State
        </button>
        <p>{this.state.persist}</p>
        <Button />
        <Link to="/sdds">Bad link</Link>
      </div>
    </div>
  );
}

export default Home;
