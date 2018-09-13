import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";
import HeaderCell from "./HeaderCell";
import AvailabilityIndicator from "./AvailabilityIndicator";

const AvailabilityGrid = styled(HeaderCell)`
  position: sticky;
  left: 0;
  :empty {
    background-color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
  }
    z-index: 1001;
`;

export default AvailabilityGrid;
