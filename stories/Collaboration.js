import React from "react";
import {storiesOf} from "@storybook/react";
import styled from "styled-components";
import {fromPalette} from "../src/theme/theme";
import LabelText from "../src/common/typography/LabelText";

const ColumnHeader = styled.th`
    width: 24px;
    height: 40px;
    max-width: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    background-color: ${({theme}) => fromPalette(theme, 'secondaryDark')};
    border-left: 1px ${({theme}) => fromPalette(theme, 'lightGrey')} solid;
    border-right: 1px ${({theme}) => fromPalette(theme, 'lightGrey')} solid;
    color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`;

const CornerHeader = styled.th`
    width: 24px;
    height: 40px;
    max-width: 24px;
    background-color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
    position: absolute;
    left: 0;
`;

const RowHeader = styled.th`
    width: 24px;
    height: 24px;
    background-color: ${({theme}) => fromPalette(theme, 'secondaryDark')};
    border: 1px ${({theme}) => fromPalette(theme, 'secondary')} solid;
    position: absolute;
    left: 0;
`;

const Td = styled.td`
  min-width: 24px;
  width: 24px;
  height: 24px;
  background-color: ${({theme}) => fromPalette(theme, 'secondary')};
  color: ${({theme}) => fromPalette(theme, 'secondary')};
  :empty {
    background-color: ${({theme}) => fromPalette(theme, 'lightGrey')};
  }  
`;

const Table = styled.table`
    table-layout: fixed;
    padding-left: 24px;
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
  height: 24px;
  border-top: 2px ${({theme}) => fromPalette(theme, 'lightGrey')} solid;
`;

const dates = Array.apply(null, Array(30));

storiesOf('Collaboration', module)
.add('table', () => [
  <div style={{position:"relative", display: 'flex'}} >
    <Table>
      <thead>
        <tr>
          <CornerHeader scope="col"></CornerHeader>
          { dates.map(
            (v, i) => <ColumnHeader scope="col"><LabelText>{i + 1}</LabelText></ColumnHeader>
          )}
        </tr>
      </thead>
      <tbody>
        <Row>
          <RowHeader scope="row"><LabelText>Dan</LabelText></RowHeader>
          { dates.map(
            (v, i) => <Td scope="col">{i % 3 ? "Y" : undefined}</Td>
          )}
        </Row>
        <Row>
          <RowHeader scope="row"><LabelText>Joe</LabelText></RowHeader>
          { dates.map(
            (v, i) => <Td scope="col">{i % 5 ? "Y" : undefined}</Td>
          )}
        </Row>
        <Row>
          <RowHeader scope="row"><LabelText>Min</LabelText></RowHeader>
          { dates.map(
            (v, i) => <Td scope="col">{i % 7 ? "Y" : undefined}</Td>
          )}
        </Row>
      </tbody>
    </Table>
  </div>
]);

