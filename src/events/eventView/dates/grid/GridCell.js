import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";

const GridCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  grid-column:  ${({startCol}) => startCol} / ${({endCol, spanCol}) => endCol || `span ${spanCol || 1}`};
  grid-row:  ${({startRow}) => startRow} / ${({endRow, spanRow}) => endRow || `span ${spanRow || 1}`};
  background-color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
  padding: 0px 8px;
`;

export default GridCell;
