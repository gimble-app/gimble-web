import { selectEvents } from "../selectors";

export const selectEventFromId = (state, id) => {
  return selectEvents(state) && selectEvents(state)[id];
};
