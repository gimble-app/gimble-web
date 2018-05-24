import {selectCurrentUserIdForQuery} from "../auth/selectors";
import {FRIENDS_COLLECTION} from "../friends/firestoreQueries";
export const PROFILES_COLLECTION = 'profile';

export const myProfile = (state) => ({
  collection: PROFILES_COLLECTION,
  doc: selectCurrentUserIdForQuery(state),
});

export const myProfileWithFriends = (state) => ({
  collection: PROFILES_COLLECTION,
  doc: selectCurrentUserIdForQuery(state),
  subcollections: [
    {   collection: FRIENDS_COLLECTION }
  ]
});
