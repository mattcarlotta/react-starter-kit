/* @flow */

import { userAction } from '../actions';
import App from '../components/App';
import Home from '../components/Home';
import AsyncUserInfo from '../components/UserInfo';
import NotFound from '../components/NotFound';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/UserInfo/:id',
        component: AsyncUserInfo,
        loadData: ({ params }) => [userAction.fetchUserIfNeeded(params.id)],
      },
      {
        component: NotFound,
      },
    ],
  },
];
