import React, {Fragment} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {
  firebaseConnect,
  firestoreConnect,
  isEmpty,
  isLoaded
} from "react-redux-firebase";
import LinearProgress from '@material-ui/core/LinearProgress';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";
import {selectEventsList} from "./selectors";
import {eventsForUserQuery} from "./firestoreQueries";
import BackgroundMessage from './BackgroundMessage';
import AddEventButton from "./AddEventButton";
import Page from '../common/Page';
import TripTimeline from './TripTimeline';
import CentredFlex from "../common/layout/CentredFlex";
import BigAvatar from "../common/BigAvatar";
import BigButton from "../common/buttons/BigButton";
import {selectMyProfile} from "../profile/selectors";
import {myProfile} from "../profile/firestoreQueries";

const CentredPanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

export const TimelinePage = ({ events, profile }) => (
  <Page>
    <CentredPanel>
      <BigButton>
        <BigAvatar src={profile && profile.photoURL } />
      </BigButton>
      {
      !isLoaded(events)
        ? <LinearProgress />
        : <Fragment>
          { isEmpty(events)
            ? <BackgroundMessage/>
            :
            <TripTimeline events={events}/> }
          <AddEventButton/>
        </Fragment>
    }
    </CentredPanel>
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
