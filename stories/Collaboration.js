import React from "react";
import {storiesOf} from "@storybook/react";
import styled from "styled-components";
import {fromPalette} from "../src/theme/theme";
import LabelText from "../src/common/typography/LabelText";

const CELL_WIDTH = "24px";
const ROW_CELL_HEADER_WIDTH = "32px";
const COLUMN_CELL_HEADER_HEIGHT = "24px";
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
    display: flex;
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

const Row = styled.tr`
`;

const AvailableIndicator = styled.div`
  height: 4px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryLight')};
`;

const dates = Array.apply(null, Array(30));

storiesOf('Collaboration', module)
.add('table', () => [
  <div style={{position:"relative", display: 'flex'}} >
    <Table>
      <thead>
        <tr>
          <CornerHeader scope="col"></CornerHeader>
          <ColumnHeaderCell colSpan={dates.length}>September</ColumnHeaderCell>
        </tr>
        <tr>
          <CornerHeader scope="col"></CornerHeader>
          { dates.map(
            (v, i) => <ColumnHeaderCell scope="col"><LabelText>{i + 1}</LabelText></ColumnHeaderCell>
          )}
        </tr>
      </thead>
      <tbody>
        <Row>
          <RowHeaderCell scope="row"><LabelText>Dan</LabelText></RowHeaderCell>
          { dates.map(
            (v, i) => <Cell scope="col">{i % 3 ? <AvailableIndicator /> : ""}</Cell>
          )}
        </Row>
        <Row>
          <RowHeaderCell scope="row"><LabelText>Joe</LabelText></RowHeaderCell>
          { dates.map(
            (v, i) => <Cell scope="col">{i % 5 ? <AvailableIndicator /> : ""}</Cell>
          )}
        </Row>
        <Row>
          <RowHeaderCell scope="row"><LabelText>Min</LabelText></RowHeaderCell>
          { dates.map(
            (v, i) => <Cell scope="col">{i % 7 ? <AvailableIndicator /> : ""}</Cell>
          )}
        </Row>
      </tbody>
    </Table>
  </div>
]);

