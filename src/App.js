import React, { Component } from 'react';
import HomeScreen from './home/HomeScreen';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HomeScreen />
      </div>
    );
  }
}

export default withStyles(styles)(App);
