import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import routes from '../routes';

const _bob = 'Wow';

const configureMiddleware = reducer =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureMiddleware(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default App;
