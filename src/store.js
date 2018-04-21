import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase';

import rootReducer from './reducers'

const firebaseConfig = {
  apiKey: 'AIzaSyBlilaIaFcNa1UusIxbEJT9E0mm3RriRZE',
  authDomain: 'gimble-app.firebaseapp.com',
  databaseURL: 'https://gimble-app.firebaseio.com',
  projectId: "gimble-app",
}
// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

export default (initialState = {}) => {
  firebase.initializeApp(firebaseConfig)

  const createStoreWithFirebase = compose(
    applyMiddleware(
       thunk.withExtraArgument(getFirebase)
     ),
    reactReduxFirebase(firebase, config),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore)

  const store = createStoreWithFirebase(rootReducer, initialState)

  return store;
}
