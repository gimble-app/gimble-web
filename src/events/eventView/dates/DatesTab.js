import PageContent from "../../../common/PageContent";
import React from "react";
import SubheadingText from "../../../common/typography/SubheadingText";
import EventParticipantDatesEntry from './EventParticipantDatesEntry';

const DatesTab = ({event}) =>
  <PageContent>
    <SubheadingText>Availability</SubheadingText>
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      { Object.values(event.participants).map(
        participant => <EventParticipantDatesEntry key={participant.uid} participant={participant} event={event} />
      ) }
    </div>
  </PageContent>;

export default DatesTab;
