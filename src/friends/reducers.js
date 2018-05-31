import { FRIEND_PROFILES_UPDATED } from './actions';

const friends = (state = [], action) => {
  switch (action.type) {
    case FRIEND_PROFILES_UPDATED: {
      return action.data;
    }
    default: return state;
  }
}

export default friends;
