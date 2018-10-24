import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);
