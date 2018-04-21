import firebase from 'firebase';

export const getFirebaseAuth = () => {
  return firebase.auth();
}

export const logOut = () => {
  return firebase.auth().signOut();
}
