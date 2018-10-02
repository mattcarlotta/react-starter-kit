import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import * as types from '../types';

const testReducer = (state = '', { type }) => {
  switch (type) {
    case types.APP_TEST:
      return (state = 'Persist Redux State');
    default:
      return state;
  }
};

export default combineReducers({
  testing: testReducer,
  form: formReducer,
  routing,
});
