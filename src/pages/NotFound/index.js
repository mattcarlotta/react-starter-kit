import React from 'react';
import { Link } from 'react-router-dom';
import { notfound, notfoundContainer } from './styles.scss';

export default () => (
  <div className={notfoundContainer}>
    <div className={notfound}>
      <h1>404 - Page Not Found!</h1>
      <Link to="/">Take Me Home</Link>
    </div>
  </div>
);
