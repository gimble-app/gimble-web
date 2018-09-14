import PageContent from "../../../common/PageContent";
import React from "react";
import SubheadingText from "../../../common/typography/SubheadingText";
import EventParticipantDatesEntry from './EventParticipantDatesEntry';
import moment from "moment";
import AvailabilityGrid from "./grid/AvailabilityGrid";

const parseParticipantGridModel = (participants) => {
  let ranges = [];
  const people = {};

  participants.forEach(p => {
    people[p.uid] = p.preferredDates.map(range => ({ from: range.from, to: range.to }))
    ranges =  ranges.concat(people[p.uid])
  });

  let min;
  let max;

  ranges.forEach(range => {
    if(!min || moment(range.from).isBefore(min)) {
      min = range.from;
    }
    if(!max || moment(range.to).isAfter(max)) {
      max = range.to;
    }
  });

  const dates = new Set();

  for(let date = moment(min); !date.isAfter(max); date.add("days", 1)) {
    dates.add(date.format("YYYY-MM-DD"));
  }

  return {
    dates: [...dates],
    people
  };
};

const DatesTab = ({event}) => (<PageContent>
    <SubheadingText>Availability</SubheadingText>
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      { Object.values(event.participants).map(
        participant => <EventParticipantDatesEntry key={participant.uid} participant={participant} event={event} />
      ) }
    </div>
   <AvailabilityGrid model={parseParticipantGridModel(Object.values(event.participants))}/>
  </PageContent>);

export default DatesTab;
