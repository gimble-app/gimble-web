import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui-icons/Close';
import { Link } from "react-router-dom";
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

const CancelButton = ({ classes }) =>
  <Link to="/">
    <IconButton color="inherit" aria-label="cancel"><NavigationClose /></IconButton>
  </Link>

export default withStyles(styles)(CancelButton);
