import React from "react";
import HeaderContent from "./HeaderContent";
import EventPageToolbar from "./EventPageToolbar";
import DisplayText from "../../../common/typography/DisplayText";
import DetailedHeader from "../../../common/DetailedHeader";

const EventHeader = ({ event }) =>
  <DetailedHeader image={ event.image && event.image.src }>
    <EventPageToolbar event={ event }/>
    <HeaderContent><DisplayText>{ event.title }</DisplayText></HeaderContent>
  </DetailedHeader>;

export default EventHeader;
