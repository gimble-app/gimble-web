import React from "react";
import Header from "./Header";
import HeaderContent from "./HeaderContent";
import EventPageToolbar from "./EventPageToolbar";
import DisplayText from "../../../common/typography/DisplayText";

const EventHeader = ({ event }) =>
  <Header square image={ event.image && event.image.src }>
    <EventPageToolbar event={ event }/>
    <HeaderContent><DisplayText>{ event.title }</DisplayText></HeaderContent>
  </Header>;

export default EventHeader;
