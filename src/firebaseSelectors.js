export const firebaseSelector = ({firebase}) => firebase;
export const firestoreSelector = ({firestore}) => firestore;

export const mapsSelector = (state) => firestoreSelector(state).data;
export const listsSelector = (state) => firestoreSelector(state).ordered;
