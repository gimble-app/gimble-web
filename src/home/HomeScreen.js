import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  flex: {
    flex: 1
  },
  welcome: {
    margin: theme.spacing.unit * 2,
  },
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const HomeScreen = ({ classes }) =>
<Fragment>
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
  <Typography
    variant="body1"
    color="inherit"
    align="center"
    className={classes.welcome}
  >
    Not much here at the moment. Maybe you should add an event...
  </Typography>
  <Button variant="fab" color="primary" aria-label="add" className={classes.fab}>
    <AddIcon />
  </Button>
</Fragment>


export default withStyles(styles)(HomeScreen);
