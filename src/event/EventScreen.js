import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';

const styles = theme => ({
  flex: {
    flex: 1
  }
});

export const EventScreen = ({classes}) =>
<Fragment>
  <AppBar position="static">
    <Toolbar>
      <CancelButton />
      <Typography variant="title" color="inherit" className={classes.flex}>
        Title
      </Typography>
      <SaveButton />
    </Toolbar>
  </AppBar>
  <Typography
    variant="body1"
    color="inherit"
    align="center"
  >
    This is where an item would be created
  </Typography>
</Fragment>

export default withStyles(styles)(EventScreen);
