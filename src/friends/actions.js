import {remove} from '../clients/firebase';
import {sendNotification} from '../notifications/actions';
import {FRIEND_REQUEST_COLLECTION} from "./firestoreQueries";
import {selectCurrentUserId} from "../auth/selectors";
import {selectMyDisplayName} from "../profile/selectors";

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';
export const RESCIND_SUCCESS = 'invite rescinded';
export const RESCIND_FAILURE = 'failed to rescind invite';

export const invite = email =>
  async (dispatch, getState, { getRemoteFunction } ) => {
    try {
      const requestFriend = getRemoteFunction('requestFriend');
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
  async (dispatch, getState, { getFirestore } ) => {
    try{
      await remove(FRIEND_REQUEST_COLLECTION, id, getFirestore);
      dispatch(sendNotification(RESCIND_SUCCESS));
    } catch(error) {
      dispatch(sendNotification(RESCIND_FAILURE));
      console.log(error);
    }
  };


export const accept = id =>
  async (dispatch, getState, { getFirestore } ) => {
    console.log('accepted', id);
  };

export const reject = id =>
  async (dispatch, getState, { getFirestore } ) => {
    console.log('rejected', id);
  };
