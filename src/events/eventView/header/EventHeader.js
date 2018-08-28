import React from "react";
import DisplayText from "../../../common/typography/DisplayText";
import DetailedHeader from "../../../common/DetailedHeader";
import HistoryAwareCancelButton
  from "../../../common/buttons/HistoryAwareCancelButton";
import EventActions from "./EventActions";
import ParticipantsSummary from "./ParticipantsSummary";

const EventHeader = ({ event }) =>
  <DetailedHeader image={ event.image && event.image.src }>
    <HistoryAwareCancelButton colour="primaryContrast" />
    <div>
      <DisplayText>{ event.title }</DisplayText>
      <ParticipantsSummary participants={ event.participants } />
      <EventActions id={event.id} />
    </div>
  </DetailedHeader>;

export default EventHeader;
