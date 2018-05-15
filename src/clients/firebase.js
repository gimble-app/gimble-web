import firebase from 'firebase';
import 'firebase/firestore';
import uuid from "uuid/v4";

const firebaseConfig = {
  apiKey: 'AIzaSyBlilaIaFcNa1UusIxbEJT9E0mm3RriRZE',
  authDomain: 'gimble-app.firebaseapp.com',
  databaseURL: 'https://gimble-app.firebaseio.com',
  projectId: "gimble-app",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export const create = (collection, data, getFirestore) => {
  const id = uuid();
  return getFirestore().set(`${collection}/${id}`, {...data, id});
};

export const update = (collection, id, data, getFirestore) => {
  return getFirestore().update(`${collection}/${id}`, data);
};

export const remove = (collection, id, getFirestore) => {
  return getFirestore().delete(`${collection}/${id}`);
}


export default firebase;
