import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import { LinearProgress } from 'material-ui/Progress';
import {firebaseConnect, firestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";
import {selectEventsList} from "./selectors";
import {eventsForUserQuery} from "./firestoreQueries";
import BackgroundMessage from './BackgroundMessage';
import AddButton from "./AddButton";
import Page from '../common/Page';
import EventsOverview from './EventsOverview';

export const EventsPage = ({ events }) => (
  <Page>
    {
      !isLoaded(events)
        ? <LinearProgress />
        : isEmpty(events)
          ? <BackgroundMessage/>
          : <EventsOverview events={events}/>
    }
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
