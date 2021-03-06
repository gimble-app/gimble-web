import React from "react";
import moment from "moment";
import PageContent from "../../../common/PageContent";
import SubheadingText from "../../../common/typography/SubheadingText";
import AvailabilityGrid from "./grid/AvailabilityGrid";
import FinaliseDatesHandler from "./FinaliseDatesHandler";
import AddDateHandler from "./AddDateHandler";

const parseParticipantGridModel = (participants) => {
  const peopleRanges = participants
                        .reduce((working, person) => ({
                          ...working,
                          [person.uid]: person.preferredDates || []
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

const DatesTab = ({event}) => (
  <PageContent>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
      <SubheadingText>When are we free?</SubheadingText>
      <FinaliseDatesHandler event={event} />
    </div>
    <div style={{marginTop: "16px"}}>
      <AvailabilityGrid event={event} model={parseParticipantGridModel(Object.values(event.participants))}/>
      <AddDateHandler event={event} />
    </div>
  </PageContent>);

export default DatesTab;
