import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import App from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(Root);

Root.propTypes = {
  store: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
};
