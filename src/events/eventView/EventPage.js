import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Page from "../../common/Page";
import EventHeader from "./header/EventHeader";
import PageContent from "../../common/PageContent";
import Tabs from "../../common/Tabs";
import SubheadingText from "../../common/typography/SubheadingText";
import EventParticipantDateEntry from "./EventParticipantDatesEntry";
import {selectEventFromId} from "../eventEdit/selectors";
import {eventQuery} from "../firestoreQueries";

export const EventPage = ({ event }) => (
  <Page>
    <EventHeader event={event}/>
    <Tabs
      tabs={[{ label: 'Dates', icon: DateRangeIcon }]}
      value={0}
    />
    <PageContent>
      <SubheadingText>Availability</SubheadingText>
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        { Object.values(event.participants).map(
          participant => <EventParticipantDateEntry key={participant.uid} participant={participant} event={event} />
        ) }
      </div>
    </PageContent>
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
