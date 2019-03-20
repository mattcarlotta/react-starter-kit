import React from 'react';
import ReactDOM from 'react-dom';
import App from './root';
import './styles/globals/globals.scss';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./root/index.js', () => {
    const nextApp = require('./root/index.js').default; // eslint-disable-line global-require
    render(nextApp);
  });
}
