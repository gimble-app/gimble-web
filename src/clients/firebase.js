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

export const create = (collection, data, getFirestore) =>
  (id => getFirestore().set(`${collection}/${id}`, {...data, id}))(uuid());

export const createWithQuery = (query, data, getFirestore) =>
  getFirestore().set(query, data)

export const update = (collection, id, data, getFirestore) =>
  getFirestore().update(`${collection}/${id}`, data);

export const remove = (collection, id, getFirestore) =>
  getFirestore().delete(`${collection}/${id}`);

export default firebase;
