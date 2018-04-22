import firebase from 'firebase';

export const getFirebaseAuth = () => {
  return firebase.auth();
}

export const logOut = () => {
  return firebase.auth().signOut();
}

export const logIn = () => {
  return firebase.login({ provider: 'google', type: 'redirect' });
}
