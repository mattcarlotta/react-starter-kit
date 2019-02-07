import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers/reducers.js';
import Routes from '../routes/routes.js';

const history = createBrowserHistory();
const middlewares = applyMiddleware(thunk, routerMiddleware(history));

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(middlewares),
);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);
