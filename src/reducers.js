import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import notificationReducer from './notifications/reducers';
import friendsReducer from './friends/reducers';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notifications: notificationReducer,
  friends: friendsReducer
});
