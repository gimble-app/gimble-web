import React from "react";
import Page from "../../common/Page";
import EventPageToolbar from "./EventPageToolbar";
import {connect} from "react-redux";
import {selectEventFromId} from "../eventEdit/selectors";
import MembersChipsList from "./MembersChipsList";

const EventPage = ({ event }) => (
  <Page>
    <EventPageToolbar title={ event.title } id={ event.id }/>
    <MembersChipsList members={ event.members } />
  </Page>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {}
});

export default connect(mapStateToProps)(EventPage);


