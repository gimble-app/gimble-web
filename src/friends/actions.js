import {create} from '../clients/firebase';
import {sendNotification} from '../notifications/actions';
import {FRIEND_REQUEST_COLLECTION} from "./firestoreQueries";
import {selectCurrentUserId} from "../auth/selectors";

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';

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
