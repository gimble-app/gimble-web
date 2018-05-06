import {listsSelector, mapsSelector} from "../firebaseSelectors";

export const selectEvents = state => {
  return mapsSelector(state).events;
};

export const selectEventsList = state => {
  return listsSelector(state).events;
}
