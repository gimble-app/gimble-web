import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddIcon from '@material-ui/icons/Add';

import FloatingActionButtonSmall from "../src/common/buttons/FloatingActionButtonSmall";
import FloatingActionButton from "../src/common/buttons/FloatingActionButton";
import BigProfileButton from "../src/common/buttons/BigProfileButton";
import EventTimeline from "../src/timeline/Timeline";
import EventTimelineItem from "../src/timeline/TimelineEvent";
import EventSummary from "../src/timeline/TimelineEventSummary";
import EventDescription from "../src/timeline/TimelineEventDescription";
import EventDescriptionTitleText from "../src/timeline/TimelineEventDescriptionText";
import EventBuddyList from "../src/timeline/TimelineEventBuddyList";
import EventBuddyListItem from "../src/timeline/TimelineEventBuddyListItem";
import Avatar from "../src/common/Avatar";
import TitleText from "../src/common/typography/TitleText";

storiesOf('Buttons', module)
  .add('floating action buttons', () => [
    <FloatingActionButton onClick={action('clicked')}><AddIcon /></FloatingActionButton>,
    <FloatingActionButtonSmall onClick={action('clicked')}><AddIcon /></FloatingActionButtonSmall>
  ])
  .add('profile button', () => [
    <BigProfileButton onClick={action('clicked')}>Placeholder</BigProfileButton>
  ]);


storiesOf('Event lists', module)
  .add('lists', () => [
    <div style={{ boxSixing: 'border-box', display: "flex", justifyContent: "center"}}>
    <EventTimeline>
      <EventTimelineItem>
        <EventSummary>
          <EventDescription>
            <TitleText>Some text</TitleText>
          </EventDescription>
          <EventBuddyList>
            <EventBuddyListItem>
              <Avatar>J</Avatar>
            </EventBuddyListItem>
          </EventBuddyList>
        </EventSummary>
      </EventTimelineItem>
      <EventTimelineItem>
        <EventSummary>
          <EventDescription>
            <TitleText>Some more text</TitleText>
          </EventDescription>
          <EventBuddyList>
            <EventBuddyListItem>
              <Avatar>J</Avatar>
            </EventBuddyListItem>
            <EventBuddyListItem>
              <Avatar>K</Avatar>
            </EventBuddyListItem>
          </EventBuddyList>
        </EventSummary>
      </EventTimelineItem>
    </EventTimeline>
    </div>
  ]);
