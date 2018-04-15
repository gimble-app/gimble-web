import React from 'react';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from "react-router-dom";
import { Card } from '../common/Cards';

const EventCard = ({ id, title }) => (
  <Card>
    <Link to={`/event/${id}`}>
      <CardContent>{title}</CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Link>
  </Card>
);

export default EventCard;
