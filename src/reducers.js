import { combineReducers } from 'redux';
import auth from './auth/reducers';
import events from './event/reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  auth,
  events,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})
