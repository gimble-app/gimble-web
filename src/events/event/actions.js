import uuid from 'uuid/v4';
import { selectCurrentUserId } from '../../auth/selectors';
import { sendNotification } from '../../notifications/actions';
import { EVENTS_COLLECTION } from '../firestoreQueries';

export const EVENT_SAVE_SUCCESS = 'event successfully saved';
export const EVENT_SAVE_FAILURE = 'event failed to save';

export const EVENT_DELETE_SUCCESS = 'event successfully deleted';
export const EVENT_DELETE_FAILURE = 'event failed to deleted';

function deleteEventWithId({ getFirestore }, id) {
  return getFirestore().delete(`events/${id}`);
}

function updateEvent(getState, { getFirestore }, event, id) {
  const firestore = getFirestore();
  if (!id) {
    const generatedId = uuid();
    const author = selectCurrentUserId(getState());
    return firestore.set(
      `${EVENTS_COLLECTION}/${generatedId}`,
      {...event, id: generatedId, author}
      );
  }
  else {
    return firestore.update(`${EVENTS_COLLECTION}/${id}`, event)
  }
}

export const deleteEvent = (id) =>
  async (dispatch, getState, middleware ) => {
    try {
      await deleteEventWithId(middleware, id);
      dispatch(sendNotification(EVENT_DELETE_SUCCESS));
    } catch (error) {
      dispatch(sendNotification(EVENT_DELETE_FAILURE));
      console.log(error);
    }
  };

export const saveEvent = (event, id) =>
  async (dispatch, getState, middleware ) => {
    try {
      await updateEvent(getState, middleware, event, id);
      dispatch(sendNotification(EVENT_SAVE_SUCCESS));

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
