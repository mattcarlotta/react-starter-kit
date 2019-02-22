import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const reducers = {};

export default history =>
  combineReducers({ router: connectRouter(history), ...reducers });
