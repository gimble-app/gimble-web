import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './clients/firebase';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const config = {
  attachAuthIsReady: true,
  firebaseStateName: 'firebase',
  allowMultipleListeners: true,
  enableLogging: false,
  userProfile: 'profile',
  useFirestoreForProfile: true,
  profileFactory: (userData) => ({
    displayName: userData.displayName,
    photoURL: userData.photoURL,
    email: userData.email
  })
};

export default (initialState = {}) => {

  const history = createHistory();
  const historyMiddleware = routerMiddleware(history);

  const createStoreWithFirebase = compose(
    applyMiddleware(
       thunk.withExtraArgument({ getFirestore, getFirebase }),
       historyMiddleware
     ),
    reactReduxFirebase(firebase, config),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = createStoreWithFirebase(rootReducer, initialState);

  return { store, history };
}
