import React from 'react';
import {action} from "@storybook/addon-actions";
import {storiesOf} from '@storybook/react';
import Timeline from "../src/timeline/Timeline";
import TimelineItem from "../src/timeline/TimelineItem";
import TimelineEventSummary from "../src/timeline/TimelineEventSummary";
import TimelineEventDescription from "../src/timeline/TimelineEventDescription";
import TimelineNode from "../src/timeline/TimelineNode";
import TimelineEventBuddyList from "../src/timeline/TimelineEventBuddyList";
import TimelineTimelineEventBuddyListItem
from "../src/timeline/TimelineEventBuddyListItem";
import Avatar from "../src/common/avatars/Avatar";
import TitleText from "../src/common/typography/TitleText";
import profileImage from './placeholder-profile.jpg';
import LongPressAware from "../src/common/LongPressAware";

storiesOf('Timelines', module)
.add('empty timeline', () => (
  <div style={{ boxSixing: 'border-box', display: "flex", justifyContent: "center"}}>
    <Timeline />
  </div>
))
.add('timeline with entries', () => [
  <div style={{ boxSixing: 'border-box', display: "flex", justifyContent: "center"}}>
    <Timeline>
      <TimelineItem>
        <TimelineEventSummary>
          <TimelineEventDescription>
            <TitleText>Some text</TitleText>
          </TimelineEventDescription>
          <TimelineEventBuddyList>
            <TimelineTimelineEventBuddyListItem>
              <Avatar src={profileImage} />
            </TimelineTimelineEventBuddyListItem>
          </TimelineEventBuddyList>
        </TimelineEventSummary>
      </TimelineItem>
      <TimelineItem>
        <LongPressAware onPress={action('long press')}>
          <TimelineEventSummary>
            <TimelineEventDescription>
              <TitleText>You can long press me ;)</TitleText>
            </TimelineEventDescription>
            <TimelineEventBuddyList>
              <TimelineTimelineEventBuddyListItem>
                <Avatar src={profileImage} />
              </TimelineTimelineEventBuddyListItem>
              <TimelineTimelineEventBuddyListItem>
                <Avatar>K</Avatar>
              </TimelineTimelineEventBuddyListItem>
            </TimelineEventBuddyList>
          </TimelineEventSummary>
        </LongPressAware>
      </TimelineItem>
      <TimelineNode />
    </Timeline>
  </div>
]);
