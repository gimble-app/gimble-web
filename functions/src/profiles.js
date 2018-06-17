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

  if(!profileName) {
    throw invalidArgument("Invalid profile name.");
  }

  const trimmedProfileName = profileName.trim();

  if(!/^\w[\w|\s|\-|\_]{1,29}$/.test(trimmedProfileName)) {
    throw invalidArgument("Invalid profile name.");
  }

  try {
    await firestore
      .collection(PROFILE_NAMES_COLLECTION)
      .doc(trimmedProfileName)
      .create({trimmedProfileName});
  } catch(error) {
    if(error.code === ALREADY_EXISTS) {
      throw alreadyExists("Profile name is taken.");
    }
    throw error;
  }

  return firestore
    .collection(PROFILE_COLLECTION)
    .doc(profileId)
    .set({profileName: trimmedProfileName}, {merge: true});
};
