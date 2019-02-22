/* @flow */

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import type { Store } from '../types';
import createRootReducer from '../reducers';

export default (history: Object, initialState: Object = {}): Store => {
  const middlewares = applyMiddleware(thunk, routerMiddleware(history));

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(middlewares)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      try {
        const createNextReducer = require('../reducers').default;

        store.replaceReducer(createNextReducer(history));
      } catch (error) {
        console.error(`==> 😭  Reducer hot reloading error ${error}`);
      }
    });
  }

  return store;
};
