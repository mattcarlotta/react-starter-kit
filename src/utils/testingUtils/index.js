/* istanbul ignore file */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "~reducers";

const history = createBrowserHistory();
const middlewares = applyMiddleware(thunk);

/**
 * Create a testing store with imported reducers, initial state, and middleware(s).
 * globals: rootReducer, middlewares
 * @function createStoreFactory
 * @param {object} initialState - Initial store state.
 * @returns {store} - redux store with
 */
export const createStoreFactory = initialState =>
  createStore(rootReducer(history), initialState, middlewares);
