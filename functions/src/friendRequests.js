import admin from 'firebase-admin';
import uuid from "uuid/v4";
import {httpFailedPrecondition} from "./httpErrors";

export const FRIEND_REQUESTS_COLLECTION = 'friendRequests';
export const PROFILE_COLLECTION = 'profile';
export const FRIENDS_COLLECTION = 'friends';

const getRequestorId = (context) => {
  if (verifyAuth(context)) {
    return context.auth.uid;
  }
};

const verifyAuth = (context) => {
  if (!context.auth) {
    throw httpFailedPrecondition();
  }
  return true;
};

const friendRequestDocForId = (id) => {
  const firestore = admin.firestore();
  return firestore.collection(FRIEND_REQUESTS_COLLECTION).doc(id);
};

export const request = (data, context) => {
  verifyAuth(context);
  const id = uuid();
  return friendRequestDocForId(id).set({...data, id});
};

export const rescind = ({ id }, context) => {
  verifyAuth(context);
  return friendRequestDocForId(id).delete();
};

const friendEntryForId = (profileId, friendId) => {
  const firestore = admin.firestore();
  return firestore
    .collection(PROFILE_COLLECTION)
    .doc(profileId)
    .collection(FRIENDS_COLLECTION)
    .doc(friendId);
};

export const accept = async ({ requestId }, context) => {
  const firestore = admin.firestore();
  const myId = getRequestorId(context);
  const requestRef = friendRequestDocForId(requestId);
  const request = await requestRef.get();

  if (!request.exists) {
    console.error(`Unable to find request with id ${requestId}. Cancelled accepting invite.`);
    return;
  }

  const { from } = request.data();
  const batch = firestore.batch();
  batch.set(friendEntryForId(myId, from), { to: from});
  batch.set(friendEntryForId(from, myId), { to: myId});
  batch.delete(requestRef);

  return batch.commit();
};
