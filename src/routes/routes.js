import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home.js';
import NotFound from '../components/NotFound/NotFound.js';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
