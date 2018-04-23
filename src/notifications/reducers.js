import uuid from 'uuid/v4';

const notifications = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_NOTIFICATION': {
      const id = uuid();
      return { [id]: {
          id,
          message: action.data.message
        } }
    }
    case 'NOTIFICATION_DISMISSED': {
      const {[action.data.id]: finished, ...rest} = state;
      return rest;
    }
    default: return state;
  }
}

export default notifications;

export const selectNextNotification = (state) => {
  const notifications = Object.values(state.notifications);
  return notifications.length > 0 ? notifications[0] : undefined;
};
