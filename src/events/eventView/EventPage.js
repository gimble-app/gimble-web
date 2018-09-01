import React from "react";
import {connect} from "react-redux";
import Page from "../../common/Page";
import EventHeader from "./header/EventHeader";
import PageContent from "../../common/PageContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Tabs from "../../common/Tabs";
import SubheadingText from "../../common/typography/SubheadingText";
import EventParticipantDateEntry from "./EventParticipantDatesEntry";
import {selectEventFromId} from "../eventEdit/selectors";

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
        { Object.keys(event.participants).map(uid => <EventParticipantDateEntry key={uid} uid={uid} />) }
      </div>
    </PageContent>
  </Page>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {},
});

export default connect(mapStateToProps)(EventPage);


