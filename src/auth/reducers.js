import { firebaseSelector } from '../reducers';
import { isEmpty, isLoaded } from 'react-redux-firebase';

export const selectIsLoggedIn = (state) => !isEmpty(firebaseSelector(state).auth);
export const selectIsLoaded = (state) => isLoaded(firebaseSelector(state).auth);
