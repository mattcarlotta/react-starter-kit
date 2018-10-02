import React from 'react';
import { Link } from 'react-router';
import { notfound, notfoundContainer } from '../styles/index.css';

export default () => (
  <div className={notfoundContainer}>
    <div className={notfound}>
      <h1>404 - Page Not Found!</h1>
      <Link to="/">Take Me Home</Link>
    </div>
  </div>
);
