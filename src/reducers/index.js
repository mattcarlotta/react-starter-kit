import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import serverReducer from "./server";

const reducers = {
  server: serverReducer
};

export default history =>
  combineReducers({ router: connectRouter(history), ...reducers });
