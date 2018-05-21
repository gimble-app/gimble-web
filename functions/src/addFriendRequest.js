import { https } from 'firebase-functions';
import admin from 'firebase-admin';

const addFriendRequest = (data, context) => {
  console.log(context);

  if (!context.auth) {
    throw new https.HttpsError('failed-precondition', 'The function must be called ' +
      'while authenticated.');
  }


  const firestore = admin.firestore();
  return firestore.collection('friendRequests').add({...data});
};

export default addFriendRequest;
