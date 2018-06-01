import React, {Fragment} from "react";
import {connect} from "react-redux";
import Page from "../../common/Page";
import {selectEventFromId} from "../eventEdit/selectors";
import Participants from "./Participants";
import EditButton from "./EditButton";
import EventHeader from "./header/EventHeader";

export const EventPage = ({ event }) => (
  <Fragment>
    <EventHeader event={event}/>
    <EditButton id={event.id}/>
    <Page>
      <Participants participants={ event.participants } />
    </Page>
  </Fragment>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {}
});

export default connect(mapStateToProps)(EventPage);


