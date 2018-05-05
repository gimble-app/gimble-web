import uuid from 'uuid/v4';
import { sendNotification } from '../../notifications/actions';
import { EVENTS_COLLECTION } from './data';

export const deleteEvent = (id) =>
  (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.delete(`events/${id}`)
      .then(() => {
        dispatch(eventDeleted(id))
      }).catch(error => {
        console.error(error);
      })
  };

export const EVENT_SAVE_SUCCESS = 'event successfully saved';
export const EVENT_SAVE_FAILURE = 'event failed to save';

  export const saveEvent = data =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
      if(!data.id) {
        const generatedId = uuid();
        const author = getState().firebase.auth.uid;
        await firestore.set(`${EVENTS_COLLECTION}/${generatedId}`, { ...data, id: generatedId, author });
      }
      else {
        await firestore.update(`${EVENTS_COLLECTION}/${data.id}`, data)
      }
      dispatch(sendNotification(EVENT_SAVE_SUCCESS));

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.error(error);
    }
  };
