import { selectCurrentUserId } from '../../auth/selectors';
import { sendNotification } from '../../notifications/actions';
import { EVENTS_COLLECTION } from '../firestoreQueries';
import { create, update, remove } from '../../clients/firebase';
export const EVENT_SAVE_SUCCESS = 'event successfully saved';
export const EVENT_SAVE_FAILURE = 'event failed to save';

export const EVENT_DELETE_SUCCESS = 'event successfully deleted';
export const EVENT_DELETE_FAILURE = 'event failed to deleted';

function deleteEventWithId({ getFirestore }, id) {
  return remove(EVENTS_COLLECTION, id, getFirestore);
}

function updateEvent(getState, { getFirestore }, event, id) {
  if (!id) {
    const me = selectCurrentUserId(getState());
    return create(EVENTS_COLLECTION, {
      ...event,
      participants: { ...event.participants, [me]: true }
    }, getFirestore);
  }
  else {
    return update(EVENTS_COLLECTION, id, event, getFirestore);
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
