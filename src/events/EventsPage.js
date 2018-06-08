import React, {Fragment} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";
import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import {selectEventsList} from "./selectors";
import {eventsForUserQuery} from "./firestoreQueries";
import BackgroundMessage from './BackgroundMessage';
import AddEventButton from "./AddEventButton";
import Page from '../common/Page';
import EventsOverview from './EventsOverview';
import CentredFlex from "../common/layout/CentredFlex";

const AddEventContainer = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 1.5}px;
`);

export const EventsPage = ({ events }) => (
  <Page>
    {
      !isLoaded(events)
        ? <LinearProgress />
        : <Fragment>
          { isEmpty(events)
            ? <BackgroundMessage/>
            : <EventsOverview events={events}/> }
          <AddEventContainer><AddEventButton/></AddEventContainer>
        </Fragment>
    }

  </Page>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(props => [eventsForUserQuery(props)]),
  connect(state => ({
    events: selectEventsList(state),
  })),
)(EventsPage);
