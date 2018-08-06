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
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";
import Page from '../common/Page';
import TripTimeline from './TripTimeline';
import TimelineHeader from './TimelineHeader';
import CentredFlex from "../common/layout/CentredFlex";
import BackgroundMessage from "./BackgroundMessage";

const CentredPanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

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
