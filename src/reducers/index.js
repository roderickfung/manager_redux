import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // dummy reducer as placeholder
  // placeholder: () => []
  auth: AuthReducer
});
