import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";
import HeaderCell from "./HeaderCell";

const LeftHeaderCell = styled(HeaderCell)`
  position: sticky;
  left: -1px;
  padding-top: 8px;
  overflow: hidden;
  background-color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
  z-index: 1001;
`;

export default LeftHeaderCell;
