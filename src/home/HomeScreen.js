import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import ToolbarTitleText from '../common/ToolbarTitleText';
import BackgroundMessage from './BackgroundMessage';
import ProfileMenu from './ProfileMenu';
import AddButton from './AddButton';
import Page from '../common/Page';
import EventsOverview from './EventsOverview';

export const HomeScreen = ({ events }) => (
  <Fragment>
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarTitleText>Gimble</ToolbarTitleText>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
    <Page>
      {events.length === 0 ? (
        <BackgroundMessage />
      ) : (
        <EventsOverview events={events} />
      )}
      <AddButton />
    </Page>
  </Fragment>
);

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(HomeScreen);
