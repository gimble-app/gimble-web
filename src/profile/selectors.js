import {listsSelector} from "../firebaseSelectors";

export const selectMyProfile = state => listsSelector(state).myProfile;
