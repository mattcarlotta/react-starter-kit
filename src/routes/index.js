import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

// CONFIG APP VIEWS
// const configureRoutes = () => {
//   const routes = (
//     <Switch>
//       <Route path="/" component={Home} />
//       <Route path="*" component={NotFound} />
//     </Switch>
//   );
//
//   return routes;
// };

// export default configureRoutes;
