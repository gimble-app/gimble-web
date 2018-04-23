import uuid from 'uuid/v4';

const notifications = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_NOTIFICATION': return {
      [uuid()]: {message: action.data.message}
    }
    case 'NOTIFICATION_ELAPSED': {
      const {[action.data.id]: finished, ...rest} = state;
      return rest;
    }
    default: return state;
  }
}

export default notifications;
