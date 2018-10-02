import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import configureStore from './store';
import Root from './root';
import './styles/index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Component store={store} history={history} />
    </AppContainer>,
    rootEl,
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default; // eslint-disable-line global-require
    render(NextRoot);
  });
}
