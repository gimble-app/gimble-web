import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";

const AvailabilityIndicator = styled.div`
  position: relative;
  height: 8px;
  margin-top: ${({entry}) => entry * 4}px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryLight')};
  border-radius: 24px;
`;

export default AvailabilityIndicator
