import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/root.js';
import './styles/globals/globals.scss';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./root/root.js', () => {
    render();
  });
}
