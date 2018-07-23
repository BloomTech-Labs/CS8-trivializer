import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import round from './round';

const rootReducer = combineReducers({
  form: formReducer,
  auth,
  round,
});

export default rootReducer;