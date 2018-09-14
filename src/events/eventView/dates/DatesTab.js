import PageContent from "../../../common/PageContent";
import React from "react";
import SubheadingText from "../../../common/typography/SubheadingText";
import EventParticipantDatesEntry from './EventParticipantDatesEntry';
import moment from "moment";
import AvailabilityGrid from "./grid/AvailabilityGrid";

const parseParticipantGridModel = (participants) => {
  const peopleRanges = participants
                        .reduce((working, person) => ({
                          ...working,
                          [person.uid]: !person.preferredDates ? [] : person.preferredDates.map(range => ({ from: range.from, to: range.to }))
                        }), {});

  const minMaxDates =  Object.values(peopleRanges)
                        .flatMap(personRange => personRange)
                        .reduce(({min, max}, {from, to}) => ({
                          min: !min || moment(from).isBefore(min) ? from : min,
                          max: !max || moment(to).isAfter(max) ? to : max
                        }), {});

  const representedDates = new Set();

  for(const date = moment(minMaxDates.min); !date.isAfter(minMaxDates.max); date.add(1, "days")) {
    representedDates.add(date.format("YYYY-MM-DD"));
  }

  return {
    dates: [...representedDates],
    peopleRanges
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
