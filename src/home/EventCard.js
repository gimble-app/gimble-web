import React from 'react';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Card } from '../common/Cards';

const EventCard = ({ title }) => (
  <Card>
    <CardContent>{title}</CardContent>
    <CardActions>
      <Button size="small">Details</Button>
    </CardActions>
  </Card>
);

export default EventCard;
