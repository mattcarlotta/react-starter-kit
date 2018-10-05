import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
  form: formReducer,
  routing,
});
