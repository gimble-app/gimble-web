import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";

const AvailabilityIndicator = styled.div`
  height: 8px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryLight')};
  border-radius: 24px;
`;


export default AvailabilityIndicator
