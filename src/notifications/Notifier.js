import React from 'react';
import { connect } from 'react-redux';
import { selectNextNotification } from './reducers';
import { notificationDismissed } from './actions';
import Notification from './Notification';

export const Notifier = ({ notification, notificationDismissed }) => (
  !!notification
  ? <Notification notification={notification} onDismiss={() => notificationDismissed(notification.id)}/>
  : null
);

const mapStateToProps = (state) => ({
  notification: selectNextNotification(state)
})

const mapDispatchToProps = {
  notificationDismissed
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
