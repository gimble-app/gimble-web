import { selectCurrentUserIdForQuery, selectCurrentUserEmailForQuery} from "../auth/selectors";
import { FRIENDS_STORE_KEY } from './selectors';
import {PROFILES_COLLECTION} from "../profile/firestoreQueries";

export const FRIEND_REQUEST_COLLECTION = 'friendRequests';
export const FRIENDS_COLLECTION = 'friends';

export const requestsFromUserCollection = (state) => ({
  collection: FRIEND_REQUEST_COLLECTION,
  where: ['from', '==', selectCurrentUserIdForQuery(state)],
  storeAs: 'requestedFriends'
});

export const requestsToUserCollection = (state) => ({
  collection: FRIEND_REQUEST_COLLECTION,
  where: ['to', '==', selectCurrentUserEmailForQuery(state)],
  storeAs: 'friendRequests'
});

export const profileQuery = (id) => ({
  collection: PROFILES_COLLECTION,
  doc: id,
  storeAs: FRIENDS_STORE_KEY
});

export const friendsCollection = (state) => `${PROFILES_COLLECTION}/${selectCurrentUserIdForQuery(state)}/${FRIENDS_COLLECTION}`;
