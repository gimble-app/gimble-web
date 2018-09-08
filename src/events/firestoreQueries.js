export const EVENTS_COLLECTION = 'events';

export const eventQuery = (id) => {
  return ({
    collection: EVENTS_COLLECTION,
    doc: id
  });
}
