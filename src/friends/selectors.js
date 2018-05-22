import {listsSelector, mapsSelector} from "../firebaseSelectors";
export const FRIENDS_STORE_KEY = 'friends';

const profileSelector = state => listsSelector(state).profile && listsSelector(state).profile[0];

export const selectFriendRefs = state => profileSelector(state) && profileSelector(state).friends;
export const selectFriendRequests = state => listsSelector(state).friendRequests;
export const selectFriendProfiles = state => mapsSelector(state)[FRIENDS_STORE_KEY] && Object.values(mapsSelector(state)[FRIENDS_STORE_KEY]);
export const selectRequestedFriends = state => listsSelector(state).requestedFriends;
