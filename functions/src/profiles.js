import admin from 'firebase-admin';
import {httpFailedPrecondition, invalidArgument} from "./httpErrors";

const PROFILE_COLLECTION = 'profile';
export const PROFILE_NAMES_COLLECTION = 'profileNames';

const getRequestorId = (context) => {
  if (context.auth) {
    return context.auth.uid;
  }
  throw httpFailedPrecondition();
};

export const registerProfileName = async ({profileName}, context) => {
  const profileId = getRequestorId(context);

  const firestore = admin.firestore();

  if(!profileName || !profileName.length > 0) {
    throw invalidArgument("Profile name can't be empty.");
  }

  await firestore
    .collection(PROFILE_NAMES_COLLECTION)
    .doc(profileName)
    .create({profileName});

  return firestore
    .collection(PROFILE_COLLECTION)
    .doc(profileId)
    .set({profileName: profileName}, {merge: true});
};
