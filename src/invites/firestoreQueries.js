import {selectCurrentUserIdForQuery} from "../auth/selectors";
export const FRIEND_REQUEST_COLLECTION = 'friendRequests';

export const requestsFromUserCollection = (state) => ({
  collection: FRIEND_REQUEST_COLLECTION,
  where: ['from', '==', selectCurrentUserIdForQuery(state)],
  storeAs: 'requestedFriends'
});
