import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader';
import configureRoutes from '../routes';

const routes = configureRoutes();

const Root = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default hot(module)(Root);

Root.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
