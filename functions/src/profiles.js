import admin from 'firebase-admin';
import {alreadyExists, httpFailedPrecondition, invalidArgument} from "./httpErrors";

const PROFILE_COLLECTION = 'profile';
export const ALREADY_EXISTS = 6;
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

  try {
    await firestore
      .collection(PROFILE_NAMES_COLLECTION)
      .doc(profileName)
      .create({profileName});
  } catch(error) {
    if(error.code === ALREADY_EXISTS) {
      throw alreadyExists("Profile name is taken.");
    }
    throw error;
  }

  return firestore
    .collection(PROFILE_COLLECTION)
    .doc(profileId)
    .set({profileName: profileName}, {merge: true});
};
