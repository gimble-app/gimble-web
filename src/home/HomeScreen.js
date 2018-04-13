import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AddButton from './AddButton';
import ToolbarTitleText from '../common/ToolbarTitleText';
import EventCard from './EventCard';
import BackgroundMessage from './BackgroundMessage';

export const HomeScreen = ({ events }) =>
<Fragment>
  <AppBar position="static">
    <Toolbar>
      <ToolbarTitleText>Gimble</ToolbarTitleText>
    </Toolbar>
  </AppBar>
  { events.length === 0 ?
    <BackgroundMessage /> :
    events.map(event => <EventCard key={event.title} title={event.title}/>)
  }
  <LogoutButton />
  <AddButton />
</Fragment>

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(HomeScreen);
