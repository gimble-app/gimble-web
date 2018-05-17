import { firebaseSelector } from '../firebaseSelectors';
import { isEmpty, isLoaded } from 'react-redux-firebase';

export const selectIsLoggedIn = state => !isEmpty(firebaseSelector(state).auth);
export const selectIsLoaded = state => isLoaded(firebaseSelector(state).auth);
export const selectCurrentUserId = state => firebaseSelector(state).auth.uid;

export const selectCurrentUserEmailForQuery = state => firebaseSelector(state).auth().currentUser.email;
export const selectCurrentUserIdForQuery = state => firebaseSelector(state).auth().currentUser.uid;
