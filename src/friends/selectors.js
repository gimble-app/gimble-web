import {listsSelector} from "../firebaseSelectors";
import {selectMyProfileWithFriends} from "../profile/selectors";
export const FRIENDS_STORE_KEY = 'friends';

export const selectFriendRefs = state => selectMyProfileWithFriends(state) && selectMyProfileWithFriends(state).friends;
export const selectFriends = state => state.friends;
export const selectFriendRequests = state => listsSelector(state).friendRequests;


