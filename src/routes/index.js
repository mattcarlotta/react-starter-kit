import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Message from 'containers/PopMessage';
import NotFound from 'pages/NotFound';

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
