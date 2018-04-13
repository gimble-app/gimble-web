import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import ToolbarTitleText from '../common/ToolbarTitleText';
import EventCard from './EventCard';
import BackgroundMessage from './BackgroundMessage';
import ProfileMenu from './ProfileMenu';
import AddButton from './AddButton';

export const HomeScreen = ({ events }) =>
<Fragment>
  <AppBar position="static">
    <Toolbar>
      <ToolbarTitleText>Gimble</ToolbarTitleText>
      <ProfileMenu />
    </Toolbar>
  </AppBar>
  { events.length === 0 ?
    <BackgroundMessage /> :
    events.map(event => <EventCard key={event.id} title={event.title}/>)
  }
  <AddButton />
</Fragment>

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(HomeScreen);
