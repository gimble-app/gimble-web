import React, {Fragment} from "react";
import HeaderCell from "./HeaderCell";
import moment from "moment";
import LeftHeaderCell from "./LeftHeaderCell";
import LabelText from "../../../../common/typography/LabelText";
import GridCell from "./GridCell";
import Grid from "./Grid";
import LabelledAvatarForProfile from "../LabelledAvatarForProfile";
import EditDateHandler from "../EditDateHandler";
import AvailabilityIndicator from "./AvailabilityIndicator";
import {selectCurrentUserId} from "../../../../auth/selectors";
import {connect} from "react-redux";

const PEOPLE_COLUMN = "person-header-column";
const PERSON_ROW = `person-row`;
const DATE_COLUMN = "date-column";
const DATES_ROW = "date-header-row";

const AvailabilityGrid = ({ model, event, myUid }) => {
  const {dates, peopleRanges} = model;
  const peopleUids = Object.keys(peopleRanges);

  return <Grid
    columns={dates.map(date => `${DATE_COLUMN}-${date}`)}
    rows={peopleUids.flatMap(personUid => peopleRanges[personUid].map((v,i) => `${PERSON_ROW}-${personUid}-${i + 1}`))
    }
  >
    <LeftHeaderCell
      startCol={PEOPLE_COLUMN}
      startRow={DATES_ROW}
    />
    {
      dates.map(date =>
        <HeaderCell
          key={date}
          startCol={`${DATE_COLUMN}-${date}`}
          startRow={DATES_ROW}
        >
          <LabelText>{moment(date).format("MMM D")}</LabelText>
        </HeaderCell>
      )
    }

    {
      peopleUids.map(personUid =>
        <Fragment key={personUid}>
          <LeftHeaderCell
            startCol={PEOPLE_COLUMN}
            startRow={`${PERSON_ROW}-${personUid}-1`}
            endRow={`${PERSON_ROW}-${personUid}-${peopleRanges[personUid].length}`}
          >
            <LabelledAvatarForProfile uid={personUid}/>
          </LeftHeaderCell>
          {
            peopleRanges[personUid].map((range, i) =>
              <GridCell
                key={`${range.from}-${range.to}`}
                startCol={`${DATE_COLUMN}-${range.from}`}
                endCol={`${DATE_COLUMN}-${range.to}`}
                startRow={`${PERSON_ROW}-${personUid}-${i+1}`}
              >
                { myUid === personUid ?
                  <EditDateHandler event={event} date={range} />
                  : <AvailabilityIndicator/>
                }

              </GridCell>
            )
          }
        </Fragment>
      )
    }
  </Grid>;
};

const mapStateToProps = (state) => ({
  myUid: selectCurrentUserId(state)
});

export default connect(mapStateToProps)(AvailabilityGrid);
