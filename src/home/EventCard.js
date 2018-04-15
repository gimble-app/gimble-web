import React from 'react';
import { CardContent } from 'material-ui/Card';
import { InternalLink } from '../common/InternalLinks';
import { Card } from '../common/Cards';

const EventCard = ({ id, title }) => (
  <Card>
    <InternalLink to={`/event/${id}`}>
      <CardContent>{title}</CardContent>
    </InternalLink>
  </Card>
);

export default EventCard;
