import { EVENT_SAVED, EVENT_DELETED } from './actions';
import uuid from 'uuid/v4';

const event = (state, { data, type } ) => {
  switch (type) {
    case EVENT_SAVED:
      return {
          id: data.id || uuid(),
          ...data
      };
    default:
      return state;
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case EVENT_SAVED:
      const updated = event(
        state.find(event => event.id === action.data.id)
        , action);
      return [...state.filter(e => e.id !== action.data.id), updated];
    case EVENT_DELETED:
      return [...state.filter(e => e.id !== action.data.id)];
    default:
      return state;
  }
}
 
export const selectEventFromId = (state, id) => {
  const event = state.events.find(event => event.id === id);
  return event;
}

export default events
