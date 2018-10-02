import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default; // eslint-disable-line global-require

        store.replaceReducer(
          nextReducer,
          composeWithDevTools(applyMiddleware(thunk)),
        );
      });
    }
  }

  return store;
};

export default configureStore;
