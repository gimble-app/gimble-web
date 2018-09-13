import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";
import GridCell from "./GridCell";

const HeaderCell = styled(GridCell)`
  background-color: ${({theme}) => fromPalette(theme, 'secondaryLight')};
  z-index: 1000;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default HeaderCell;
