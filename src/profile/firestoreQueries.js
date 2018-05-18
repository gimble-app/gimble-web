import {selectCurrentUserIdForQuery} from "../auth/selectors";
export const PROFILES_COLLECTION = 'profile';

export const myProfile = (state) => ({
  collection: PROFILES_COLLECTION,
  doc: selectCurrentUserIdForQuery(state),
});
