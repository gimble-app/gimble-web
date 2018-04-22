import firebase from 'firebase';
import 'firebase/firestore';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

const config = {
  userProfile: 'users',
  attachAuthIsReady: true,
  firebaseStateName: 'firebase',
  enableLogging: false
}

const firebaseConfig = {
  apiKey: 'AIzaSyBlilaIaFcNa1UusIxbEJT9E0mm3RriRZE',
  authDomain: 'gimble-app.firebaseapp.com',
  databaseURL: 'https://gimble-app.firebaseio.com',
  projectId: "gimble-app",
}

export default (initialState = {}) => {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore();

  const createStoreWithFirebase = compose(
    applyMiddleware(
       thunk.withExtraArgument({ getFirestore, getFirebase }),
     ),
    reactReduxFirebase(firebase, config),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore)

  const store = createStoreWithFirebase(rootReducer, initialState)

  return store;
}
