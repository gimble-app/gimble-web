import {sendNotification} from '../notifications/actions';
import {selectCurrentUserId} from "../auth/selectors";
import {selectMyDisplayName} from "../profile/selectors";
import {REQUEST_FRIEND, RESCIND_FRIEND_REQUEST} from "../clients/remoteFunctions";

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';
export const RESCIND_SUCCESS = 'invite rescinded';
export const RESCIND_FAILURE = 'failed to rescind invite';

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
      await rescindFriendRequest({
        id
      });

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
