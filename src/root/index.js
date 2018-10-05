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
  history: PropTypes.objectOf(PropTypes.func),
  store: PropTypes.shape({
    dispatch: PropTypes.func,
    getState: PropTypes.func,
    liftedStore: PropTypes.shape({
      dispatch: PropTypes.func,
      subscribe: PropTypes.func,
      getState: PropTypes.func,
      replaceReducer: PropTypes.func,
      Symbol: PropTypes.func,
    }),
    replaceReducer: PropTypes.func,
    subscribe: PropTypes.func,
    Symbol: PropTypes.func,
  }),
};
