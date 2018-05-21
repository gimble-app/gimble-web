export const REQUEST_FRIEND = 'requestFriend';

export const functionLookup = getFirebase => {
  return (named) => {
    return getFirebase().functions().httpsCallable(named);
  }
};
