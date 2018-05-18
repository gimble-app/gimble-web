import {firebaseSelector} from "../firebaseSelectors";

export const selectMyProfile = state => firebaseSelector(state).profile;
export const selectMyDisplayName = state => selectMyProfile(state).displayName;
