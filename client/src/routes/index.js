import React, { Fragment } from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';

// CONFIG APP VIEWS
export default (
  <Fragment>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
    <Route path="*" component={NotFound} />
  </Fragment>
);
