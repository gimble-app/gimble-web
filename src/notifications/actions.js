export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export const NOTIFICATION_DISMISSED = 'NOTIFICATION_DISMISSED';

export const sendNotification = (message) => ({
  type: SEND_NOTIFICATION,
  data: { message }
});

export const notificationDismissed = (id) => ({
  type: NOTIFICATION_DISMISSED,
  data: { id }
});
