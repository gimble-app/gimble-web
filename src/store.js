import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './clients/firebase';
import api from './clients/api';
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

const authTokenSupportedApi = (getFirebase) => {
  const getApi = async () => {
    const authToken = await getFirebase().auth().currentUser.getIdToken();
    return api(authToken);
  }
  return getApi;
}

const functions = getFirebase => {
  return getFirebase().functions().httpsCallable;
}

export default (initialState = {}) => {

  const history = createHistory();
  const historyMiddleware = routerMiddleware(history);
  const createStoreWithFirebase = compose(
    applyMiddleware(
       thunk.withExtraArgument({
         getFunctions: functions(getFirebase),
         getApi: authTokenSupportedApi(getFirebase),
         getFirestore,
         getFirebase,
       }),
       historyMiddleware
     ),
    reactReduxFirebase(firebase, config),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = createStoreWithFirebase(rootReducer, initialState);

  return { store, history };
}
