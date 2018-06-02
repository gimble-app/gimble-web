import React from 'react';
import CardCollection from '../common/CardCollection';
import EventCard from './EventCard';

const EventsOverview = ({ events }) => (
  <CardCollection>
    {events.map(event => <EventCard
      key={event.id}
      id={event.id}
      title={event.title}
      image={event.image}
    />)  }
  </CardCollection>
);

export default EventsOverview;
