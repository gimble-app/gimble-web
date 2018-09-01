import { PROFILES_HYDRATED } from './actions';

const profiles = (state = [], action) => {
  switch (action.type) {
    case PROFILES_HYDRATED: {
      return action.data;
    }
    default: return state;
  }
}

export default profiles;
