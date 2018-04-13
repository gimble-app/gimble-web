import { combineReducers } from 'redux';
import isLoggedIn from './auth/reducers';
import events from './event/reducers';
 
export default combineReducers({
  isLoggedIn,
  events
})
