import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => <Fragment>{children}</Fragment>;

export default App;

App.propTypes = {
  children: PropTypes.node,
};
