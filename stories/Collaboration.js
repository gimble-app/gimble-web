import React, {Fragment} from "react";
import {storiesOf} from "@storybook/react";
import styled from "styled-components";
import {fromPalette} from "../src/theme/theme";
import LabelText from "../src/common/typography/LabelText";
import moment from "moment";
import Grid from "../src/events/eventView/dates/grid/Grid";
import HeaderCell from "../src/events/eventView/dates/grid/HeaderCell";
import LeftHeaderCell from "../src/events/eventView/dates/grid/LeftHeaderCell";
import GridCell from "../src/events/eventView/dates/grid/GridCell";
import AvailabilityIndicator from "../src/events/eventView/dates/grid/AvailabilityIndicator";

const CELL_WIDTH = "28px";
const ROW_CELL_HEADER_WIDTH = "32px";
const COLUMN_CELL_HEADER_HEIGHT = "44px";
const CELL_HEIGHT = "24px";

const ColumnHeaderCell = styled.th`
    width: ${CELL_WIDTH};
    height: ${COLUMN_CELL_HEADER_HEIGHT};
    max-width: ${CELL_WIDTH};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    background-color: ${({theme}) => fromPalette(theme, 'secondaryLight')};
    color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`;

const RowHeaderCell = styled.th`
    width: ${ROW_CELL_HEADER_WIDTH};
    height: ${CELL_HEIGHT};
    background-color: ${({theme}) => fromPalette(theme, 'secondaryLight')};
    position: absolute;
    align-items: center;
    left: 0;
    border-top: 4px solid ${({theme}) => fromPalette(theme, 'secondaryContrast')};
    border-bottom: 4px solid ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`;

const Cell = styled.td`
  min-width: ${CELL_WIDTH};
  width: ${CELL_WIDTH};
  height: ${CELL_HEIGHT};
  margin: 4px 0px;
  color: ${({theme}) => fromPalette(theme, 'secondary')};
  padding: 0px; 
`;

const CornerHeader = styled.th`
    width: ${CELL_WIDTH};
    height: ${COLUMN_CELL_HEADER_HEIGHT};
    max-width: ${CELL_WIDTH};
    background-color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
    position: absolute;
    left: 0;
`;


const Table = styled.table`
    table-layout: fixed;
    padding-left: ${ROW_CELL_HEADER_WIDTH};
    border-collapse:collapse;
    background-color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    ::-webkit-scrollbar
    {
      display: none;
    }
    flex: 1;
`;

const data = {
  dates: [
    '2018-08-23', '2018-08-24', '2018-08-25', '2018-08-26', '2018-08-27', '2018-08-28', '2018-08-29', '2018-08-30', '2018-08-31',
    '2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04'
  ],
  people: {
    dan: [
      { from: '2018-08-23', to: '2018-09-01' },
      { from: '2018-08-30', to: '2018-09-03' }
    ],
    min: [
      { from: '2018-08-28', to: '2018-08-31' },
      { from: '2018-09-01', to: '2018-09-04' }
    ]
  }
};

storiesOf('Collaboration', module)
.add('grid', () => (
  <Grid
    columns={data.dates.map(date => `date-col-${date}`)}
    rows={Object.keys(data.people).flatMap(person => data.people[person].map((v,i) => `person-row-${person}-${i+1}`))
    }
  >
    <LeftHeaderCell
      startCol={"person-header-column"}
      startRow={"date-header-row"}
    />
    {
      data.dates.map(date =>
        <HeaderCell
          startCol={`date-col-${date}`}
          startRow={"date-header-row"}
        >
          <LabelText>{moment(date).format("MMM D")}</LabelText>
        </HeaderCell>
      )
    }

    {
      Object.keys(data.people).map(person =>
        <Fragment>
          <LeftHeaderCell
            startCol={"person-header-column"}
            startRow={`person-row-${person}-1`}
            spanRow={person.length}
          >
            <LabelText>{person}</LabelText>
          </LeftHeaderCell>
          {
            data.people[person].map((range, i) =>
              <GridCell
                startCol={`date-col-${range.from}`}
                endCol={`date-col-${range.to}`}
                startRow={`person-row-${person}-${i+1}`}
              >
                <AvailabilityIndicator entry={i+1}/>
              </GridCell>
            )
          }
        </Fragment>
      )
    }
  </Grid>
))
.add('table', () => [
  <div style={{position:"relative", display: 'flex'}} >
    <Table>
      <thead>
        <tr>
          <CornerHeader scope="col" />
          <ColumnHeaderCell colSpan={data.dates.length}>September</ColumnHeaderCell>
        </tr>
        <tr>
          <CornerHeader scope="col" />
          { data.dates.map(
            (v, i) => <ColumnHeaderCell scope="col"><LabelText>{i + 1}</LabelText></ColumnHeaderCell>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <RowHeaderCell scope="row"><LabelText>Dan</LabelText></RowHeaderCell>
          { data.dates.map(
            (v, i) => <Cell scope="col">{i % 3 ? <AvailabilityIndicator /> : ""}</Cell>
          )}
        </tr>
        <tr>
          <RowHeaderCell scope="row" />
          { data.dates.map(
            (v, i) => <Cell scope="col">{i % 3 ? <AvailabilityIndicator /> : ""}</Cell>
          )}
        </tr>
        <tr>
          <RowHeaderCell scope="row"><LabelText>Joe</LabelText></RowHeaderCell>
          { data.dates.map(
            (v, i) => <Cell scope="col">{i % 5 ? <AvailabilityIndicator /> : ""}</Cell>
          )}
        </tr>
        <tr>
          <RowHeaderCell scope="row"><LabelText>Min</LabelText></RowHeaderCell>
          { data.dates.map(
            (v, i) => <Cell scope="col">{i % 7 ? <AvailabilityIndicator /> : ""}</Cell>
          )}
        </tr>
      </tbody>
    </Table>
  </div>
]);

