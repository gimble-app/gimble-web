import {selectCurrentUserIdForQuery, selectCurrentUserEmailForQuery} from "../auth/selectors";
export const FRIEND_REQUEST_COLLECTION = 'friendRequests';

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
