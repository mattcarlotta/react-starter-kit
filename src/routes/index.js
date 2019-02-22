import App from "../components/App";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

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
        component: NotFound
      }
    ]
  }
];
