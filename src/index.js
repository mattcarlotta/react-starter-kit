import React from 'react';
import ReactDOM from 'react-dom';
import App from './root';
import './styles/globals/globals.scss';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./root', () => {
    render();
  });
}

// import React from 'react';
// import { render } from 'react-dom';
// import App from './root';
// import './styles/globals/globals.scss';
//
// render(<App />, document.getElementById('root'));
