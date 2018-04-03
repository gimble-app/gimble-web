import firebase from 'firebase';

firebase.initializeApp({
    "apiKey": "AIzaSyBlilaIaFcNa1UusIxbEJT9E0mm3RriRZE",
    "authDomain": "gimble-app.firebaseapp.com"
});

export const setAuthCallback = (callback) => {
  return firebase.auth().onAuthStateChanged(callback);
}

export const getUiConfig = () => {
  return {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
}

export const getFirebaseAuth = () => {
  return firebase.auth();
}

export const logOut = (callback) => {
  firebase.auth().signOut()
    .then(callback);
}
