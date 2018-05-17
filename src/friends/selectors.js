import {listsSelector} from "../firebaseSelectors";

export const selectRequestedFriendsList = state => listsSelector(state).friendRequests;
