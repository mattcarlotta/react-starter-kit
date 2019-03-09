import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/root.js';
import './styles/globals/globals.scss';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./root/root.js', () => {
    const nextApp = require('./root/root.js').default; // eslint-disable-line global-require
    render(nextApp);
  });
}
