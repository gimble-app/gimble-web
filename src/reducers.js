import { combineReducers } from 'redux';
import auth from './auth/reducers';
import events from './event/reducers';
 
export default combineReducers({
  auth,
  events
})
