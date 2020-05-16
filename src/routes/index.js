import React from "react";
import { Route, Switch } from "react-router-dom";
import MessageContainer from "~containers/MessageContainer";
import LazyLoad from "~components/LazyLoad";

const Routes = () => (
  <>
    <MessageContainer />
    <Switch>
      <Route exact path="/" component={LazyLoad("Home")} />
      <Route component={LazyLoad("NotFound")} />
    </Switch>
  </>
);

export default Routes;
