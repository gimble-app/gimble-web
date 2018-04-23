import uuid from 'uuid/v4';
import { sendNotification } from '../notifications/actions';

export const EVENT_SAVED = 'EVENT_SAVED';
export const EVENT_DELETED = 'EVENT_DELETED';

export const eventDeleted = id => ({
  type: EVENT_DELETED,
  data: {
    id
  }
});

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


export const eventSaved = (data) => ({
  type: EVENT_SAVED,
  data
});

const EVENT_SAVE_SUCCESS = 'event successfully saved';
const EVENT_SAVE_FAILURE = 'event failed to save';

export const saveEvent = (data, id) =>
  async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    try {
      if(!id) {
        const generatedId = uuid();
        const author = getState().firebase.auth.uid;
        await firestore.set(`events/${generatedId}`, { ...data, id: generatedId, author });
      }
      else {
        await firestore.update(`events/${id}`, data)
      }
      dispatch(sendNotification(EVENT_SAVE_SUCCESS));
      dispatch(eventSaved(data))

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.error(error);
    }
  };
