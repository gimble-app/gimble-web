export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export const NOTIFICATION_ELAPSED = 'NOTIFICATION_ELAPSED';

export const sendNotification = (message) => ({
  type: SEND_NOTIFICATION,
  data: { message }
});

export const notificationElapsed = (id) => ({
  type: NOTIFICATION_ELAPSED,
  data: { id }
});
