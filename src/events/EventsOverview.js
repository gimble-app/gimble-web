import React from 'react';
import CardCollection from '../common/CardCollection';
import EventCard from './EventCard';

const EventsOverview = ({ events }) => (
  <CardCollection>
    {events.map(event => <EventCard
      key={event.id}
      event={event}
    />)  }
  </CardCollection>
);

export default EventsOverview;
