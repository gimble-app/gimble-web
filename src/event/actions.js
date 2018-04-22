export const EVENT_SAVED = 'EVENT_SAVED';
export const EVENT_DELETED = 'EVENT_DELETED';

export const eventDeleted = id => ({
  type: EVENT_DELETED,
  data: {
    id
  }
});

export const eventSaved = (data) => ({
  type: EVENT_SAVED,
  data
});


export const saveEvent = data =>
  (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    firestore.update(`events/${data.id}`, data)
      .then(() => {
        dispatch(eventSaved(data))
      }).catch(error => {
        console.error(error);
      })
  };
