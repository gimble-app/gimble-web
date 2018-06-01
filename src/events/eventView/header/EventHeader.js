import React from "react";
import Header from "./Header";
import HeaderContent from "./HeaderContent";
import EventPageToolbar from "./EventPageToolbar";
import HeaderTitleText from "../../../common/typography/HeaderText";

const EventHeader = ({ event }) => <Header>
  <EventPageToolbar id={ event.id }/>
  <HeaderContent><HeaderTitleText>{ event.title }</HeaderTitleText></HeaderContent>
</Header>;

export default EventHeader;
