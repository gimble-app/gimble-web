import { reducer as formReducer } from 'redux-form'
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import notificationReducer from './notifications/reducers';
import profilesReducer from './profile/reducers';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notifications: notificationReducer,
  profiles: profilesReducer,
  form: formReducer
});
