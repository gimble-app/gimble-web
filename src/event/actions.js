import uuid from 'uuid/v4';

export const EVENT_SAVED = 'EVENT_SAVED';
export const EVENT_DELETED = 'EVENT_DELETED';

export const eventDeleted = id => ({
  type: EVENT_DELETED,
  data: {
    id
  }
});

export const deleteEvent = (id) =>
  (dispatch, getState, getFirestore) => {
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


export const saveEvent = (data, id) =>
  async (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    try {
      if(!id) {
        const generatedId = uuid();
        await firestore.set(`events/${generatedId}`, { ...data, id: generatedId })
      } else {
        await firestore.update(`events/${id}`, data)
      }
      dispatch(eventSaved(data))

    } catch (error) {
      console.error(error);
    }
  };
