import {PROFILES_COLLECTION} from "./firestoreQueries";
import {listsSelector} from "../firebaseSelectors";

export const PROFILES_HYDRATED = 'PROFILES_HYDRATED';

const profilesHydrated = (profiles) => ({
  type: PROFILES_HYDRATED,
  data: profiles
});

const getProfileFromRef = async (ref) => {
  try {
    const snapshot = await ref.get();
    return snapshot.exists && friendProfileMapper(snapshot.data(), snapshot.id);
  }
  catch (e) {
    console.log('errored while trying to load profile info for friend', e);
  }
};

export const hydrateProfiles = uids =>
  async (dispatch, getState, { getFirestore } ) => {
    const firestore = getFirestore();
    try {
      const result = await Promise.all(
        uids
        .map(id => firestore.doc(`${PROFILES_COLLECTION}/${id}`))
        .map(getProfileFromRef)
      );
      const profiles = result.filter(response => !!response);
      dispatch(profilesHydrated(profiles));
    } catch(e) {
      console.error(e);
    }
  };

export const profileHydrationMiddleware = store => next => action => {
  if(action.type === "@@reduxFirestore/LISTENER_RESPONSE"
    && action.meta.collection === "profile"
    && action.meta.subcollections
    && action.meta.subcollections[0]
    && action.meta.subcollections[0].collection === "friends"
  )  {
    store.dispatch(hydrateProfiles([
      listsSelector(store.getState()).profile[0].uid,
      ...action.payload.ordered.map(item => item.id)
    ]));
  }

  return next(action);
};

const friendProfileMapper = (data, id) => ({
  uid: id,
  photoURL: data.photoURL,
  displayName: data.displayName,
});
