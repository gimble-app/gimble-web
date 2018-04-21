import React from 'react';
import { CardCollection } from '../common/Cards';
import EventCard from './EventCard';

const EventsOverview = ({ events }) => (
  <CardCollection>
    {events.map(({key, value}) => <EventCard
      key={key}
      id={value.id}
      title={value.title}
    />)  }
  </CardCollection>
);

export default EventsOverview;
