import { EVENT_SAVED } from './actions';
import uuid from 'uuid/v4';

const event = (state, { data, type } ) => {
  switch (type) {
    case EVENT_SAVED:
      return {
          id: uuid(),
          ...data
      };
    default:
      return state;
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case EVENT_SAVED:
      return [...state, event(undefined, action)];
    default:
      return state;
  }
}
 
export const selectEventFromId = (state, id) => {
  const event = state.events.find(event => event.id === id);
  return event;
}

export default events
