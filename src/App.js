import React from 'react';
import HomeScreen from './home/HomeScreen';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1
  }
};

const App = ({ classes }) =>
  <div className={classes.root}>
    <HomeScreen />
  </div>

export default withStyles(styles)(App);
