import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: 30,
    right: 20
  }
});

const AddButton = ({ classes }) => (
  <Link to="/event">
    <Button
      variant="fab"
      color="primary"
      aria-label="add"
      className={classes.fab}
    >
      <AddIcon />
    </Button>
  </Link>
);

export default withStyles(styles)(AddButton);
