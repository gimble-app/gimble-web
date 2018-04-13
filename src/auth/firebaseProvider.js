import 'firebase/auth';
import firebase from 'firebase';

firebase.initializeApp({
    "apiKey": "AIzaSyBlilaIaFcNa1UusIxbEJT9E0mm3RriRZE",
    "authDomain": "gimble-app.firebaseapp.com"
});

export const getFirebaseAuth = () => {
  return firebase.auth();
}

export const logOut = () => {
  return firebase.auth().signOut();
}
