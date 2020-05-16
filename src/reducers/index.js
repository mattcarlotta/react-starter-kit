import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import messageReducer from "./Messages";

const reducers = {
  message: messageReducer,
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });
