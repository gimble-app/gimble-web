import React from "react";
import DisplayText from "../../../common/typography/DisplayText";
import DetailedHeader from "../../../common/DetailedHeader";
import HistoryAwareCancelButton
  from "../../../common/buttons/HistoryAwareCancelButton";
import ParticipantsSummary from "./ParticipantsSummary";
import EditButton from "./EditButton";

export const EventHeader = ({ event }) =>
  <DetailedHeader image={ event.image && event.image.src }>
    <HistoryAwareCancelButton colour="primaryContrast" />
    <div style={{textAlign: "right"}}>
      <DisplayText>{ event.title }</DisplayText>
      <div>
        <ParticipantsSummary participants={ event.participants } />
        <EditButton id={event.id}/>
      </div>
    </div>
  </DetailedHeader>;

export default EventHeader;
