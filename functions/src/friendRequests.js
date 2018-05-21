import { https } from 'firebase-functions';
import admin from 'firebase-admin';

const verifyAuth = (auth) => {
  if (!auth) {
    throw new https.HttpsError('failed-precondition', 'The function must be called ' +
      'while authenticated.');
  }
};

export const request = (data, context) => {
  verifyAuth(context.auth);

  const firestore = admin.firestore();
  return firestore.collection('friendRequests').add({...data});
};


export const rescind = ({ id }, context) => {
  verifyAuth(context.auth);

  const firestore = admin.firestore();
  return firestore.collection('friendRequests').doc(id).delete();
};
