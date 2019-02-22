/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';

// Import your global styles here
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import { app } from './styles.scss';

type Props = { route: Object };

const config = {
  htmlAttributes: { lang: 'en' },
  title: 'Webpack-React-Boilerplate',
  titleTemplate: 'SSR - %s',
  meta: [
    {
      name: 'description',
      content: 'The best react universal starter boilerplate in the world.'
    }
  ]
};

const App = ({ route }: Props) => (
  <div className={app}>
    <Helmet {...config} />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);
