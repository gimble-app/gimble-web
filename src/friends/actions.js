import {sendNotification} from '../notifications/actions';
import {ACCEPT_FRIEND_REQUEST} from "../clients/remoteFunctions";

export const ACCEPT_SUCCESS = 'invite accepted';
export const ACCEPT_FAILURE = 'failed to accept invite';

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
