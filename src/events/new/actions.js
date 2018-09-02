import {sendNotification} from '../../notifications/actions';
import {EVENTS_COLLECTION} from '../firestoreQueries';
import {create} from '../../clients/firebase';

export const EVENT_SAVE_SUCCESS = 'event successfully saved';
export const EVENT_SAVE_FAILURE = 'event failed to save';

function updateEvent(getState, { getFirestore }, event) {
  return create(EVENTS_COLLECTION, {
    ...event,
  }, getFirestore);
}

export const saveEvent = (event) =>
  async (dispatch, getState, middleware ) => {
    try {
      await updateEvent(getState, middleware, event);
      dispatch(sendNotification(EVENT_SAVE_SUCCESS));
    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
