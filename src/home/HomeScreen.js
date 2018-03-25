import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class HomeScreen extends Component {
  render() {
    const { classes } = this.props;

    return (
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
    );
  }
}

export default withStyles(styles)(HomeScreen);
