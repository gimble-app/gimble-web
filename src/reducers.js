import { combineReducers } from 'redux'
import isLoggedIn from './auth/reducers'
 
export default combineReducers({
  isLoggedIn
})
