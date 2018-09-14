import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";
import GridCell from "./GridCell";

const HeaderCell = styled(GridCell)`
  background-color: ${({theme}) => fromPalette(theme, 'secondaryLight')};
  border-radius: 4px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 8px;
`;

export default HeaderCell;
