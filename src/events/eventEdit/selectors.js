import { selectEvents } from "../selectors";

export const selectEventFromId = (state, id) => {
  console.log(id);
  return selectEvents(state) && selectEvents(state)[id];
};
