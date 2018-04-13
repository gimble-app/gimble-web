import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AddButton from './AddButton';
import ToolbarTitleText from '../common/ToolbarTitleText';

export const HomeScreen = ({ events }) =>
<Fragment>
  <AppBar position="static">
    <Toolbar>
      <ToolbarTitleText>Gimble</ToolbarTitleText>
    </Toolbar>
  </AppBar>
  <Typography
    variant="body1"
    color="inherit"
    align="center"
  >
    Not much here at the moment. Maybe you should add an event.
    {
      events.map(event => <section key="event">event placeholder</section>)
    }
    <LogoutButton />
  </Typography>
  <AddButton />
</Fragment>

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(HomeScreen);
