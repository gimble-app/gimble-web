import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import { InternalLink } from '../common/InternalLinks';
import { withStyles } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: 0,
    right: 0
  }
});

const AddButton = ({ classes }) => (
  <Fade
    in
    style={{ transitionDelay: 1000 }}
  >
    <Button
      variant="fab"
      color="primary"
      aria-label="add"
      className={classes.fab}
    >
      <InternalLink to="/event">
        <AddIcon />
      </InternalLink>
    </Button>
  </Fade>
);

export default withStyles(styles)(AddButton);
