import {create, remove} from '../clients/firebase';
import {sendNotification} from '../notifications/actions';
import {FRIEND_REQUEST_COLLECTION} from "./firestoreQueries";
import {selectCurrentUserId} from "../auth/selectors";

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';
export const RESCIND_SUCCESS = 'invite rescinded';
export const RESCIND_FAILURE = 'failed to rescind invite';

export const invite = email =>
  async (dispatch, getState, { getFirestore } ) => {
    try {
      await create(FRIEND_REQUEST_COLLECTION, {
          from: selectCurrentUserId(getState()),
          to: email
        },
        getFirestore
      );
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
