
const getRoot = state =>  state.firestore;

export const selectEventFromId = (state, id) => {
  const { data } = getRoot(state);
  return data.events && data.events[id];
}
