import {mapsSelector} from "../firebaseSelectors";
import {selectCurrentUserId} from "../auth/selectors";

export const selectMyProfile = state =>
  mapsSelector(state).profile && mapsSelector(state).profile[selectCurrentUserId(state)];
