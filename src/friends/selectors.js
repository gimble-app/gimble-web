import {listsSelector} from "../firebaseSelectors";

export const selectRequestedFriends = state => listsSelector(state).requestedFriends;
export const selectFriendRequests = state => listsSelector(state).friendRequests;
