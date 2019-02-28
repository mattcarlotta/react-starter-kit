import App from "../components/App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ShowUsers from "../pages/ShowUsers";
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
