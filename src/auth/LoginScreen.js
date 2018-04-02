import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  welcome: {
    margin: theme.spacing.unit * 2,
  }
});

const LoginScreen = ({ classes }) =>
  <Typography
    variant="body1"
    color="inherit"
    align="center"
    className={classes.welcome}
  >
    Welcome! You aren't currently logged in to the app.
  </Typography>


export default withStyles(styles)(LoginScreen);
