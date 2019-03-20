import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Message from '../containers/PopMessage';

const Routes = () => (
  <div>
    <Message />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
