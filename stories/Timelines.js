import React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from "../src/timeline/Timeline";
import TimelineEvent from "../src/timeline/TimelineEvent";
import TimelineEventSummary from "../src/timeline/TimelineEventSummary";
import TimelineEventDescription from "../src/timeline/TimelineEventDescription";
import TimelineNode from "../src/timeline/TimelineNode";
import TimelineEventBuddyList from "../src/timeline/TimelineEventBuddyList";
import TimelineTimelineEventBuddyListItem from "../src/timeline/TimelineEventBuddyListItem";

import Avatar from "../src/common/avatars/Avatar";
import TitleText from "../src/common/typography/TitleText";

storiesOf('Timelines', module)
.add('empty timeline', () => (
  <div style={{ boxSixing: 'border-box', display: "flex", justifyContent: "center"}}>
    <Timeline />
  </div>
))
.add('timeline with entries', () => [
  <div style={{ boxSixing: 'border-box', display: "flex", justifyContent: "center"}}>
    <Timeline>
      <TimelineEvent>
        <TimelineEventSummary>
          <TimelineEventDescription>
            <TitleText>Some text</TitleText>
          </TimelineEventDescription>
          <TimelineEventBuddyList>
            <TimelineTimelineEventBuddyListItem>
              <Avatar>J</Avatar>
            </TimelineTimelineEventBuddyListItem>
          </TimelineEventBuddyList>
        </TimelineEventSummary>
      </TimelineEvent>
      <TimelineEvent>
        <TimelineEventSummary>
          <TimelineEventDescription>
            <TitleText>Some more text</TitleText>
          </TimelineEventDescription>
          <TimelineEventBuddyList>
            <TimelineTimelineEventBuddyListItem>
              <Avatar>J</Avatar>
            </TimelineTimelineEventBuddyListItem>
            <TimelineTimelineEventBuddyListItem>
              <Avatar>K</Avatar>
            </TimelineTimelineEventBuddyListItem>
          </TimelineEventBuddyList>
        </TimelineEventSummary>
      </TimelineEvent>
      <TimelineNode />
    </Timeline>
  </div>
]);
