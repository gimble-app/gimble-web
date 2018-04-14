import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {
  card: {
    margin: 16
  }
};

const EventCard = ({ title, classes }) => (
  <Card className={classes.card}>
    <CardContent>{title}</CardContent>
    <CardActions>
      <Button size="small">Details</Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(EventCard);
