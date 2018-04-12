import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import LogoutButton from '../auth/LogoutButton';
import AddButton from './AddButton';
import ToolbarTitleText from '../common/ToolbarTitleText';

const styles = theme => ({
  welcome: {
    margin: theme.spacing.unit * 2,
  }
});
export const HomeScreen = ({ classes }) =>
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
    className={classes.welcome}
  >
    Not much here at the moment. Maybe you should add an event...
    <LogoutButton />
  </Typography>
  <AddButton />
</Fragment>


export default withStyles(styles)(HomeScreen);
