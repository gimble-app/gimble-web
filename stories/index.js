import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddIcon from '@material-ui/icons/Add';

import FloatingActionButtonSmall from "../src/common/buttons/FloatingActionButtonSmall";
import FloatingActionButton from "../src/common/buttons/FloatingActionButton";
import BigProfileButton from "../src/common/buttons/BigButton";
import Timeline from "../src/timeline/Timeline";
import TimelineEvent from "../src/timeline/TimelineEvent";
import TimelineEventSummary from "../src/timeline/TimelineEventSummary";
import TimelineEventDescription from "../src/timeline/TimelineEventDescription";
import TimelineNode from "../src/timeline/TimelineNode";
import TimelineEventBuddyList from "../src/timeline/TimelineEventBuddyList";
import TimelineTimelineEventBuddyListItem from "../src/timeline/TimelineEventBuddyListItem";
import Avatar from "../src/common/avatars/Avatar";
import TitleText from "../src/common/typography/TitleText";
import BigRedButton from "../src/common/buttons/BigRedButton";

storiesOf('Buttons', module)
  .add('floating action buttons', () => [
    <FloatingActionButton onClick={action('clicked')}><AddIcon /></FloatingActionButton>,
    <FloatingActionButtonSmall onClick={action('clicked')}><AddIcon /></FloatingActionButtonSmall>
  ])
  .add('profile button', () => [
    <BigProfileButton onClick={action('clicked')}>Placeholder</BigProfileButton>
  ])
  .add('big red button', () => [
    <BigRedButton onClick={action('clicked')}>Placeholder</BigRedButton>
  ]);


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
