import React, {Fragment} from "react";
import HeaderCell from "./HeaderCell";
import AvailabilityIndicator from "./AvailabilityIndicator";
import moment from "moment";
import LeftHeaderCell from "./LeftHeaderCell";
import LabelText from "../../../../common/typography/LabelText";
import GridCell from "./GridCell";
import Grid from "./Grid";

const PEOPLE_COLUMN = "person-header-column";
const PERSON_ROW = `person-row`;
const DATE_COLUMN = "date-column";
const DATES_ROW = "date-header-row";

const AvailabilityGrid = ({ model }) => {
  const {dates, people} = model;

  return <Grid
    columns={dates.map(date => `${DATE_COLUMN}-${date}`)}
    rows={Object.keys(people).flatMap(person => people[person].map((v,i) => `${PERSON_ROW}-${person}-${i + 1}`))
    }
  >
    <LeftHeaderCell
      startCol={PEOPLE_COLUMN}
      startRow={DATES_ROW}
    />
    {
      dates.map(date =>
        <HeaderCell
          startCol={`${DATE_COLUMN}-${date}`}
          startRow={DATES_ROW}
        >
          <LabelText>{moment(date).format("MMM D")}</LabelText>
        </HeaderCell>
      )
    }

    {
      Object.keys(people).map(person =>
        <Fragment>
          <LeftHeaderCell
            startCol={PEOPLE_COLUMN}
            startRow={`${PERSON_ROW}-${person}-1`}
            spanRow={person.length}
          >
            <LabelText>{person}</LabelText>
          </LeftHeaderCell>
          {
            people[person].map((range, i) =>
              <GridCell
                startCol={`${DATE_COLUMN}-${range.from}`}
                endCol={`${DATE_COLUMN}-${range.to}`}
                startRow={`${PERSON_ROW}-${person}-${i+1}`}
              >
                <AvailabilityIndicator entry={i+1}/>
              </GridCell>
            )
          }
        </Fragment>
      )
    }
  </Grid>;
};

export default AvailabilityGrid;
