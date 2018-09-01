import React from "react";
import {connect} from "react-redux";
import Page from "../../common/Page";
import {selectEventFromId} from "../eventEdit/selectors";
import EventHeader from "./header/EventHeader";
import PageContent from "../../common/PageContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Tabs from "../../common/Tabs";

export const EventPage = ({ event }) => (
  <Page>
    <EventHeader event={event}/>
    <Tabs
      tabs={[{ label: 'Dates', icon: DateRangeIcon }]}
      value={0}
    />
    <PageContent/>
  </Page>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {}
});

export default connect(mapStateToProps)(EventPage);


