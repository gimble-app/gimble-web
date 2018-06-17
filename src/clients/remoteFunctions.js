export const REQUEST_FRIEND = 'requestFriend';
export const RESCIND_FRIEND_REQUEST = 'rescindFriendRequest';
export const ACCEPT_FRIEND_REQUEST = 'acceptFriendRequest';
export const REGISTER_PROFILE_NAME = 'registerUniqueProfileName';

export const functionLookup = getFirebase => {
  return (named) => {
    return getFirebase().functions().httpsCallable(named);
  }
};
