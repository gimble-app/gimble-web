import React from 'react';
import TimelineEvent from "./TimelineEvent";
import TimelineEventSummary from "./TimelineEventSummary";
import TimelineEventDescription from "./TimelineEventDescription";
import TimelineNode from "./TimelineNode";
import TitleText from "../common/typography/TitleText";
import Timeline from "./Timeline";
import {InternalLink} from "../common/InternalLinks";
import ParticipantsSummary
from "../events/eventView/header/ParticipantsSummary";

const TripTimeline = ({ events }) => (
  <Timeline>
    { events.map(event => (
      <TimelineEvent key={event.id}>
        <InternalLink to={`/event/${event.id}`}>
          <TimelineEventSummary image={event.image}>
            <TimelineEventDescription>
              <TitleText>{event.title}</TitleText>
            </TimelineEventDescription>
            <ParticipantsSummary participants={event.participants}/>
          </TimelineEventSummary>
        </InternalLink>
      </TimelineEvent>
    ))
   }
    <TimelineNode />
  </Timeline>
);

export default TripTimeline;
