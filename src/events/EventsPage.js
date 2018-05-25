import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {selectEventsList} from "./selectors";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {eventsForUserQuery} from "./firestoreQueries";
import BackgroundMessage from './BackgroundMessage';
import AddButton from "../common/AddButton";
import Page from '../common/Page';
import EventsOverview from './EventsOverview';

export const EventsPage = ({ events }) => (
  <Page>
    {events && events.length > 0
      ? <EventsOverview events={events}/>
      : <BackgroundMessage/>}
    <AddButton type="event"/>
  </Page>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(props => [eventsForUserQuery(props)]),
  connect(state => ({
    events: selectEventsList(state),
  })),
)(EventsPage);
