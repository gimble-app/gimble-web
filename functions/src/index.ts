import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const firestore = admin.firestore();

export const addFriendRequest = functions.firestore
  .document('friendRequests/{requestId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    return firestore.collection('temp').add({ context, data });
  });
