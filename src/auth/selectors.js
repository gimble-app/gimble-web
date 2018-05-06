import { firebaseSelector } from '../firebaseSelectors';
import { isEmpty, isLoaded } from 'react-redux-firebase';

export const selectIsLoggedIn = (state) => !isEmpty(firebaseSelector(state).auth);
export const selectIsLoaded = (state) => isLoaded(firebaseSelector(state).auth);
export const selectCurrentUserId = state => firebaseSelector(state).auth().currentUser.uid;
