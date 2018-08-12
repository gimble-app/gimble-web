import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {
  firebaseConnect,
  firestoreConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import {selectEventsList} from "./selectors";
import {eventsForUserQuery} from "./firestoreQueries";
import {selectMyProfile} from "../profile/selectors";
import {myProfile} from "../profile/firestoreQueries";

import LinearProgress from '@material-ui/core/LinearProgress';
import Page from '../common/Page';
import CentredPanel from "../common/CentredPanel";
import TripTimeline from './TripTimeline';
import TimelineHeader from './TimelineHeader';
import BackgroundMessage from "./BackgroundMessage";

export const TimelineScreen = ({ events, profile }) => (
  <Page>
    <CentredPanel>
      <TimelineHeader profile={profile} />
      {
        !isLoaded(events)
          ? <LinearProgress/>
          : <TripTimeline events={events}/>
      }
    </CentredPanel>
    {isLoaded(events) && isEmpty(events) && <BackgroundMessage/>}
  </Page>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(state => [
    eventsForUserQuery(state),
    myProfile(state),
  ]),
  connect(state => ({
    events: selectEventsList(state),
    profile: selectMyProfile(state),
  })),
)(TimelineScreen);
