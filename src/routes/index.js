import App from "../components/App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ShowUsers from "../pages/ShowUsers";
import { fetchUsers } from "../actions/users";
import { setPopMessage } from "../actions/server";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        loadReduxStore: () => [
          setPopMessage("Welcome to the React SSR Boilerplate!")
        ]
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
