import styled from "styled-components";

const ROW_CELL_HEADER_WIDTH = "32px";
const COLUMN_CELL_HEADER_HEIGHT = "44px";

const Grid = styled.div`
    overflow-x: auto;
    ::-webkit-scrollbar
    {
      display: none;
    }
    
  display: grid;
  grid-template-columns: 
    [person-header-column] ${ROW_CELL_HEADER_WIDTH} 
    ${({columns}) => columns.map(entry => `[${entry}] auto [${entry}-end] 0px`).join(' ')}
  grid-template-rows: 
    [date-header-row] ${COLUMN_CELL_HEADER_HEIGHT} 
    ${({rows}) => rows.map(entry => `[${entry}] auto [${entry}-end] 0px`).join(' ')}     
`;

export default Grid;
