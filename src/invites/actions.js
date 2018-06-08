import {sendNotification} from '../notifications/actions';
import {selectCurrentUserId} from "../auth/selectors";
import {selectMyDisplayName} from "../profile/selectors";
import {REQUEST_FRIEND, RESCIND_FRIEND_REQUEST} from "../clients/remoteFunctions";

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';
export const RESCIND_SUCCESS = 'invite rescinded';
export const RESCIND_FAILURE = 'failed to rescind invite';

export const invite = email =>
  (dispatch, getState, { getRemoteFunction } ) => {
    const requestFriend = getRemoteFunction(REQUEST_FRIEND);
    return requestFriend({
      to: email,
      from: selectCurrentUserId(getState()),
      fromName: selectMyDisplayName(getState())
    }).then(() => {
      dispatch(sendNotification(INVITE_SUCCESS));
      return true;
    }).catch(error => {
      dispatch(sendNotification(INVITE_FAILURE));
      console.log(error);
      return false;
    });
  };

export const rescind = id =>
  async (dispatch, getState, { getRemoteFunction } ) => {
    try{
      const rescindFriendRequest = getRemoteFunction(RESCIND_FRIEND_REQUEST);
      await rescindFriendRequest({ id });

      dispatch(sendNotification(RESCIND_SUCCESS));
      return true;
    } catch(error) {
      dispatch(sendNotification(RESCIND_FAILURE));
      console.log(error);
      return false;
    }
  };
