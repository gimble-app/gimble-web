import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import ToolbarTitleText from '../common/ToolbarTitleText';
import BackgroundMessage from './BackgroundMessage';
import ProfileMenu from './ProfileMenu';
import AddButton from './AddButton';
import Page from '../common/Page';
import EventsOverview from './EventsOverview';

export const EventsScreen = ({ events, data }) => (
  <Fragment>
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarTitleText>Gimble</ToolbarTitleText>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
    <Page>
      { events && events.length > 0
        ? <EventsOverview events={events} />
        : <BackgroundMessage /> }
      <AddButton />
    </Page>
  </Fragment>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(({ firebase }) => {
    return [{
    collection: 'events',
    where: ['author', '==', firebase.auth().currentUser.uid]
  }]}),
  connect((state) => ({
    events: state.firestore.ordered.events,
    data: state.firestore.ordered.events,
  })),
)(EventsScreen)