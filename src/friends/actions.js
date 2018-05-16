import { createWithQuery } from '../clients/firebase';
import { sendNotification } from '../notifications/actions';
import { selectCurrentUserId } from '../auth/selectors';
import { FRIENDS_COLLECTION, FRIENDS_REQUESTED_COLLECTION } from './firestoreQueries';

export const INVITE_SUCCESS = 'invite sent';
export const INVITE_FAILURE = 'invite failed to send';

export const invite = email =>
  async (dispatch, getState, { getFirestore } ) => {
    try {
      const query = {
        collection: FRIENDS_COLLECTION,
        doc: selectCurrentUserId(getState()),
        subcollections: [{
          collection: FRIENDS_REQUESTED_COLLECTION,
          doc: email
        }]
      }
      await createWithQuery(query, { email }, getFirestore);
      dispatch(sendNotification(INVITE_SUCCESS));
    } catch(error) {
      dispatch(sendNotification(INVITE_FAILURE));
      console.log(error);
    }
  };
