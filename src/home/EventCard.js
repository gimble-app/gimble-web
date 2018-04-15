import React from 'react';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { InternalLink } from '../common/InternalLinks';
import { Card } from '../common/Cards';

const EventCard = ({ id, title }) => (
  <Card>
    <InternalLink to={`/event/${id}`}>
      <CardContent>{title}</CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </InternalLink>
  </Card>
);

export default EventCard;
