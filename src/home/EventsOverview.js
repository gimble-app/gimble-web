import React from 'react';
import { CardCollection } from '../common/Cards';
import EventCard from './EventCard';

const EventsOverview = ({ events }) => (
  <CardCollection>
    {events.map(event => <EventCard key={event.id} title={event.title}/>)  }
  </CardCollection>
);

export default EventsOverview;
