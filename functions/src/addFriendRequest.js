import admin from 'firebase-admin';

const addFriendRequest = (data) => {
  const firestore = admin.firestore();
  return firestore.collection('friendRequests').add({...data});
};

export default addFriendRequest;
