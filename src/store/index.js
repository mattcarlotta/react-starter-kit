import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
/* eslint-enable */

const configureMiddleware = reducer =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const store = configureMiddleware(rootReducer);

const configureStore = () => {
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default; // eslint-disable-line global-require

        store.replaceReducer(nextReducer, configureMiddleware(rootReducer));
      });
    }
  }

  return store;
};

export default configureStore;
