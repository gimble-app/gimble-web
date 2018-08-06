import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {
  firebaseConnect,
  firestoreConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import LinearProgress from '@material-ui/core/LinearProgress';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";
import {selectEventsList} from "./selectors";
import {eventsForUserQuery} from "./firestoreQueries";
import {selectMyProfile} from "../profile/selectors";
import {myProfile} from "../profile/firestoreQueries";
import AddEventButton from "./AddEventButton";
import Page from '../common/Page';
import TripTimeline from './TripTimeline';
import CentredFlex from "../common/layout/CentredFlex";
import BigAvatar from "../common/BigAvatar";
import BigButton from "../common/buttons/BigButton";
import BackgroundMessage from "./BackgroundMessage";

const CentredPanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

export const TimelinePage = ({ events, profile }) => (
  <Page>
    <CentredPanel>
      <div style={{position: "relative", width: "100%", display: "flex", justifyContent: "space-around", alignItems: "flex-end"}}>
        <span style={{flex: 1}}/>
        <BigButton>
          <BigAvatar src={profile && profile.photoURL } />
        </BigButton>
        <div style={{flex: 1, position: "relative"}}>
          <div style={{position: "absolute", bottom: "-12px", left: "12px"}}>
            <AddEventButton/>
          </div>
        </div>
      </div>
      {
        !isLoaded(events)
          ? <LinearProgress />
          : <TripTimeline events={events}/>
      }
    </CentredPanel>
    { isLoaded(events) && isEmpty(events) && <BackgroundMessage/> }
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
)(TimelinePage);
