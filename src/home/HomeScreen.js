import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  flex: {
    flex: 1
  }
};

const HomeScreen = ({ classes }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="title"
        color="inherit"
        className={classes.flex}
      >
        Gimble
      </Typography>
    </Toolbar>
  </AppBar>

export default withStyles(styles)(HomeScreen);
