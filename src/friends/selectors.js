import {listsSelector} from "../firebaseSelectors";
import {selectProfiles} from "../profile/selectors";
import {selectCurrentUserId} from "../auth/selectors";

export const FRIENDS_STORE_KEY = 'profiles';

export const selectFriendProfiles = state => selectProfiles(state).filter(({uid}) => uid !== selectCurrentUserId(state));
export const selectFriendRequests = state => listsSelector(state).friendRequests;


