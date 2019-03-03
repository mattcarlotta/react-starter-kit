import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import createRootReducer from "../reducers";

export default (history, initialState = {}) => {
  const middlewares = applyMiddleware(thunk, routerMiddleware(history));

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(middlewares)
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const createNextReducer = require("../reducers").default;

      store.replaceReducer(createNextReducer(history));
    });
  }

  return store;
};
