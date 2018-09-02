import {firebaseSelector, mapsSelector} from "../firebaseSelectors";
import {selectCurrentUserId} from "../auth/selectors";

export const selectMyProfile = state => firebaseSelector(state).profile; //TODO distinguish between these two profiles better

export const selectMyProfileWithFriends = props => mapsSelector(props).profile  && mapsSelector(props).profile[selectCurrentUserId(props)];

export const selectMyDisplayName = state => selectMyProfile(state).displayName;

export const selectAllProfileUids = state => {
  const profile = selectMyProfileWithFriends(state);
  return profile && profile.friends ? [...Object.keys(profile.friends), profile.uid] : [];
};

export const selectProfiles = state => {
  selectCurrentUserId(state);
  return state.profiles;
}

export const selectProfileFromUid = (state, uid) => {
  const profiles = selectProfiles(state);
  return profiles.length > 0 && profiles.find(profile => profile.uid === uid);
};
