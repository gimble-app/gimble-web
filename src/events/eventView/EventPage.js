import React, {Fragment} from "react";
import {connect} from "react-redux";
import Page from "../../common/Page";
import {selectEventFromId} from "../eventEdit/selectors";
import EditButton from "./EditButton";
import EventHeader from "./header/EventHeader";
import PageContent from "../../common/PageContent";

export const EventPage = ({ event }) => (
  <Page>
    <EventHeader event={event}/>
    <EditButton id={event.id}/>
    <PageContent/>
  </Page>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {}
});

export default connect(mapStateToProps)(EventPage);


