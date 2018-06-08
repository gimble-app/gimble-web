import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";
import LinearProgress from '@material-ui/core/LinearProgress';
import {selectEventsList} from "./selectors";
import {eventsForUserQuery} from "./firestoreQueries";
import BackgroundMessage from './BackgroundMessage';
import AddEventButton from "./AddEventButton";
import Page from '../common/Page';
import EventsOverview from './EventsOverview';
import CentredFlex from "../common/layout/CentredFlex";

export const EventsPage = ({ events }) => (
  <Page>
    {
      !isLoaded(events)
        ? <LinearProgress />
        : isEmpty(events)
          ? <BackgroundMessage/>
          : <EventsOverview events={events}/>
    }
    <CentredFlex><AddEventButton/></CentredFlex>
  </Page>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(props => [eventsForUserQuery(props)]),
  connect(state => ({
    events: selectEventsList(state),
  })),
)(EventsPage);
