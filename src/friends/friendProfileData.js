import {PROFILES_COLLECTION} from "../profile/firestoreQueries";


const getProfileFromRef = async (ref) => {
  try {
    const snapshot = await ref.get();
    return snapshot.data();
  }
  catch (e) {
    console.log('errored while trying to load profile info for friend', e);
  }
};

const friendProfileMapper = data => ({
  uid: data.uid,
  photoURL: data.photoURL,
  displayName: data.displayName,
});

export const getFriendProfiles = async (firestore, friends) => {
  const result = await Promise.all(
    friends
      .map(id => firestore.doc(`${PROFILES_COLLECTION}/${id}`))
      .map(getProfileFromRef)
  );
  return result.filter(response => !!response).map(friendProfileMapper);
};
