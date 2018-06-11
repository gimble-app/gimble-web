import {listsSelector} from "../firebaseSelectors";

export const selectRequestedFriends = state => listsSelector(state).requestedFriends;


