import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Page from "../../common/Page";
import EventHeader from "./header/EventHeader";
import Tabs from "../../common/Tabs";
import {selectEventFromId} from "../eventEdit/selectors";
import {eventQuery} from "../firestoreQueries";
import DatesTab from "./dates/DatesTab";

export const EventPage = ({ event }) => (
  <Page>
    <EventHeader event={event}/>
    <Tabs
      tabs={[{ label: 'Dates', icon: DateRangeIcon }]}
      value={0}
    />
    <DatesTab event={event}/>
  </Page>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {},
});

export default compose(
  connect(mapStateToProps),
  firebaseConnect(),
  firestoreConnect(({event}) => [
    eventQuery(event.id),
  ]),

)(EventPage);
