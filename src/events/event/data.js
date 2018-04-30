export const EVENTS_COLLECTION = 'events';

export const selectEventFromId = (state, id) => {
  const { data } = state.firestore;
  return data.events && data.events[id];
}
