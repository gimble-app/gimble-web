export const REQUEST_FRIEND = 'requestFriend';
export const RESCIND_FRIEND_REQUEST = 'rescindFriendRequest';

export const functionLookup = getFirebase => {
  return (named) => {
    return getFirebase().functions().httpsCallable(named);
  }
};
