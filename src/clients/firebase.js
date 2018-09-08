import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import uuid from "uuid/v4";

const firebaseConfig = {
  apiKey: 'AIzaSyBlilaIaFcNa1UusIxbEJT9E0mm3RriRZE',
  authDomain: 'gimble-app.firebaseapp.com',
  databaseURL: 'https://gimble-app.firebaseio.com',
  projectId: "gimble-app",
};

firebase.initializeApp(firebaseConfig);
const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings);
firebase.firestore().enablePersistence()
.catch(function(err) {
  if (err.code === 'failed-precondition') {
    console.error('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
  } else if (err.code === 'unimplemented') {
    console.error('The current browser does not support all of the features required to enable persistence');
  }
});

export const create = (collection, data, getFirestore) =>
  (id => getFirestore().set(`${collection}/${id}`, {...data, id}))(uuid());

export const createWithQuery = (query, data, getFirestore) =>
  getFirestore().set(query, data);

export const update = (collection, id, data, getFirestore) =>
  getFirestore().update(`${collection}/${id}`, data);

export const remove = (collection, id, getFirestore) =>
  getFirestore().delete(`${collection}/${id}`);

export const getDocRef = (path, firestore) => firestore.doc(path);
export const getDocData = async (path, firestore) => (await getDocRef(path, firestore).get()).data();
export const updateDoc = (path, payload, firestore) => getDocRef(path, firestore).update(payload);

export default firebase;

