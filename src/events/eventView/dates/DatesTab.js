import PageContent from "../../../common/PageContent";
import React, {Fragment} from "react";
import SubheadingText from "../../../common/typography/SubheadingText";
import EventParticipantDatesEntry from './EventParticipantDatesEntry';
import moment from "moment/moment";
import LeftHeaderCell from "./grid/LeftHeaderCell";
import HeaderCell from "./grid/HeaderCell";
import LabelText from "../../../common/typography/LabelText";
import AvailabilityIndicator from "./grid/AvailabilityIndicator";
import GridCell from "./grid/GridCell";
import Grid from "./grid/Grid";

const DatesTab = ({event}) => {
  let ranges = [];

  const participants = Object.values(event.participants);
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

  const data = {
    dates: [...dates],
    people
  };

  console.log(data);


  return (<PageContent>
    <SubheadingText>Availability</SubheadingText>
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      { Object.values(event.participants).map(
        participant => <EventParticipantDatesEntry key={participant.uid} participant={participant} event={event} />
      ) }
    </div>
    <Grid
      columns={data.dates.map(date => `date-col-${date}`)}
      rows={Object.keys(data.people).map(person => `person-row-${person}`)}
    >
      <LeftHeaderCell startCol={"person-header-column"} startRow={"date-header-row"}/>
      {
        data.dates.map(date => <HeaderCell startCol={`date-col-${date}`} startRow={"date-header-row"}><LabelText>{moment(date).format("MMM D")}</LabelText></HeaderCell>)
      }

      {
        Object.keys(data.people).map(person =>
          <Fragment>
            <LeftHeaderCell startCol={"person-header-column"} startRow={`person-row-${person}`}><LabelText>{person}</LabelText></LeftHeaderCell>
            {
              data.people[person].map((range, i) => <GridCell startCol={`date-col-${range.from}`} endCol={`date-col-${range.to}`} startRow={`person-row-${person}`}>
                <AvailabilityIndicator entry={i+1}/></GridCell>)
            }
          </Fragment>
        )
      }
    </Grid>
  </PageContent>)};

export default DatesTab;
