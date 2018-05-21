import { https } from 'firebase-functions';
import admin from 'firebase-admin';
import uuid from "uuid/v4";

const FRIEND_REQUESTS_COLLECTION = 'friendRequests';
const FRIENDS_COLLECTION = 'friends';
const PROFILE_COLLECTION = 'profile';

const verifyAuth = (auth) => {
  if (!auth) {
    throw new https.HttpsError('failed-precondition', 'The function must be called ' +
      'while authenticated.');
  }
};

export const request = (data, context) => {
  verifyAuth(context.auth);
  const id = uuid();
  const firestore = admin.firestore();
  return firestore.collection(FRIEND_REQUESTS_COLLECTION).doc(id).set({...data, id});
};

export const rescind = ({ id }, context) => {
  verifyAuth(context.auth);

  const firestore = admin.firestore();
  return firestore.collection(FRIEND_REQUESTS_COLLECTION).doc(id).delete();
};

export const accept = async ({ requestId }, context) => {
  verifyAuth(context.auth);
  const myId = context.auth.uid;
  const firestore = admin.firestore();

  console.log(`Received accept with requestId: ${requestId}`);

  const requestRef = firestore.collection(FRIEND_REQUESTS_COLLECTION).doc(requestId)
  const request = await requestRef.get();
  const { from } = request.data();

  console.log(`Located request doc from id: ${from}`);

  const myFriendsRef = firestore.collection(PROFILE_COLLECTION).doc(myId).collection(FRIENDS_COLLECTION).doc(from);
  const theirFriendsRef = firestore.collection(PROFILE_COLLECTION).doc(from).collection(FRIENDS_COLLECTION).doc(myId);

  console.log(`Updating profiles`);

  const batch = firestore.batch();
  batch.set(myFriendsRef, { to: from});
  batch.set(theirFriendsRef, { to: myId});
  batch.delete(requestRef);

  return batch.commit();
};
