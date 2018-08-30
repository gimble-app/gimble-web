import React from 'react';
import TimelineItem from "./TimelineItem";
import TimelineNode from "./TimelineNode";
import Timeline from "./Timeline";
import EventEntry from "./EventEntry";

const TripTimeline = ({ events }) => (
  <Timeline>
    { events.map(event => (
      <TimelineItem key={event.id}>
        <EventEntry event={event}/>
      </TimelineItem>
    ))
   }
    <TimelineNode />
  </Timeline>
);

export default TripTimeline;
