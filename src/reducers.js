import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import {routerReducer} from 'react-router-redux';
import notificationReducer from './notifications/reducers';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  routing: routerReducer,
  notifications: notificationReducer
});
