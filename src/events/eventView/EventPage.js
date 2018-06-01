import React, {Fragment} from "react";
import {connect} from "react-redux";
import Page from "../../common/Page";
import EventPageToolbar from "./EventPageToolbar";
import {selectEventFromId} from "../eventEdit/selectors";
import Participants from "./Participants";
import EditButton from "./EditButton";
import Header from "./Header";
import HeaderTitleText from "../../common/typography/HeaderText";

export const EventPage = ({ event }) => (
  <Fragment>
    <Header>
      <EventPageToolbar id={ event.id }/>
      <HeaderTitleText>{ event.title }</HeaderTitleText>
    </Header>
    <EditButton id={event.id}/>
    <Page>
      <Participants id={event.id} participants={ event.participants } />
    </Page>
  </Fragment>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {}
});

export default connect(mapStateToProps)(EventPage);


