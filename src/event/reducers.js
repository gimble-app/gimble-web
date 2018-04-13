import { EVENT_SAVED } from './actions';

const events = (state = [], { data, type }) => {
  switch (type) {
    case EVENT_SAVED:
      return [...state, data];
    default:
      return state;
  }
}
 
export default events
