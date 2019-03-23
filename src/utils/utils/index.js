import { applyMiddleware, createStore } from 'redux';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../../reducers';

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

/**
 * Factory function to create a ShallowWrapper for a component
 * @function shallowWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
export const shallowWrap = (Component, state = null) => {
  const wrapper = shallow(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Factory function to create a MountedWrapper for a component
 * @function mountWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {MountedWrapper}
 */
export const mountWrap = (Component, state = null) => {
  const wrapper = mount(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};
