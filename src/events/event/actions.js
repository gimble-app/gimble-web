import uuid from 'uuid/v4';
import { sendNotification } from '../../notifications/actions';
import { EVENTS_COLLECTION } from '../firestoreQueries';

export const EVENT_SAVE_SUCCESS = 'event successfully saved';
export const EVENT_SAVE_FAILURE = 'event failed to save';

export const EVENT_DELETE_SUCCESS = 'event successfully deleted';
export const EVENT_DELETE_FAILURE = 'event failed to deleted';

export const deleteEvent = (id) =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
      await firestore.delete(`events/${id}`);
      dispatch(sendNotification(EVENT_DELETE_SUCCESS));
    } catch (error) {
      dispatch(sendNotification(EVENT_DELETE_FAILURE));
      console.log(error);
    }
  };

  export const saveEvent = (event, id) =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
      if(!id) {
        const generatedId = uuid();
        const author = getState().firebase.auth.uid;
        await firestore.set(`${EVENTS_COLLECTION}/${generatedId}`, { ...event, id: generatedId, author });
      }
      else {
        await firestore.update(`${EVENTS_COLLECTION}/${id}`, event)
      }
      dispatch(sendNotification(EVENT_SAVE_SUCCESS));

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
