import React from 'react';
import { Link } from 'react-router';
import { notfound, notfoundContainer } from './notfound.scss';

export default () => (
  <div className={notfoundContainer}>
    <div className={notfound}>
      <h1>404 - Page Not Found!</h1>
      <Link to="/">Take Me Home</Link>
    </div>
  </div>
);
