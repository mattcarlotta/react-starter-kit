import Loadable from "react-loadable";
import Loading from "../Loading";

export default Loadable({
  loader: () => import("./ShowUsers"),
  loading: Loading
});
