import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
// import { createBrowserHistory } from 'history';
import configureStore from './store';
import App from './root';
import './styles/index.css';

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <App store={store} />
    </AppContainer>,
    rootEl,
  );
};

render();

if (module.hot) {
  module.hot.accept('./root', () => {
    // const NextRoot = require('./root').default; // eslint-disable-line global-require
    render();
  });
}
