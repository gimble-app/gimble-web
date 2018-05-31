import {PROFILES_COLLECTION} from '../profile/firestoreQueries';
import {sendNotification} from '../notifications/actions';
import {selectCurrentUserId} from "../auth/selectors";
import {selectMyDisplayName} from "../profile/selectors";
import {ACCEPT_FRIEND_REQUEST, REQUEST_FRIEND, RESCIND_FRIEND_REQUEST} from "../clients/remoteFunctions";

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';
export const RESCIND_SUCCESS = 'invite rescinded';
export const RESCIND_FAILURE = 'failed to rescind invite';
export const ACCEPT_SUCCESS = 'invite accepted';
export const ACCEPT_FAILURE = 'failed to accept invite';

export const invite = email =>
  async (dispatch, getState, { getRemoteFunction } ) => {
    try {
      const requestFriend = getRemoteFunction(REQUEST_FRIEND);
      await requestFriend({
        to: email,
        from: selectCurrentUserId(getState()),
        fromName: selectMyDisplayName(getState())
      });

      dispatch(sendNotification(INVITE_SUCCESS));
    } catch(error) {
      dispatch(sendNotification(INVITE_FAILURE));
      console.log(error);
    }
  };

export const rescind = id =>
  async (dispatch, getState, { getRemoteFunction } ) => {
    try{
      const rescindFriendRequest = getRemoteFunction(RESCIND_FRIEND_REQUEST);
      await rescindFriendRequest({ id });

      dispatch(sendNotification(RESCIND_SUCCESS));
    } catch(error) {
      dispatch(sendNotification(RESCIND_FAILURE));
      console.log(error);
    }
  };


export const accept = requestId =>
  async (dispatch, getState, { getRemoteFunction } ) => {
    try {
      const rescindFriendRequest = getRemoteFunction(ACCEPT_FRIEND_REQUEST);
      await rescindFriendRequest({ requestId });

      dispatch(sendNotification(ACCEPT_SUCCESS));
    } catch(error) {
      dispatch(sendNotification(ACCEPT_FAILURE));
      console.log(error);
    }
  };

export const reject = id =>
  async (dispatch, getState, { getFirestore } ) => {
    console.log('rejected', id);
  };

export const FRIEND_PROFILES_UPDATED = 'FRIEND_PROFILES_UPDATED';

const friendProfilesUpdated = (profiles) => ({
  type: FRIEND_PROFILES_UPDATED,
  data: profiles
});

const getProfileFromRef = async (ref) => {
  try {
    const snapshot = await ref.get();
    return snapshot.exists && friendProfileMapper(snapshot.data(), snapshot.id);
  }
  catch (e) {
    console.log('errored while trying to load profile info for friend', e);
  }
};

export const mapFriendProfiles = friendRefs =>
  async (dispatch, getState, { getFirestore } ) => {
    const firestore = getFirestore();
    try {
      const profileKeys = Object.keys(friendRefs);
      const result = await Promise.all(
        profileKeys
          .map(id => firestore.doc(`${PROFILES_COLLECTION}/${id}`))
          .map(getProfileFromRef)
      );
      const profiles = result.filter(response => !!response);
      dispatch(friendProfilesUpdated(profiles));
    } catch(e) {
      console.error(e);
    }
  };

const friendProfileMapper = (data, id) => ({
  uid: id,
  photoURL: data.photoURL,
  displayName: data.displayName,
});
