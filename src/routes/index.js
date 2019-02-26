import App from "../components/App";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import ShowUsers from "../components/ShowUsers/ShowUsers";
import { fetchUsers } from "../actions/users";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/users",
        exact: true,
        component: ShowUsers,
        loadInitState: () => [fetchUsers()]
      },
      {
        component: NotFound
      }
    ]
  }
];
