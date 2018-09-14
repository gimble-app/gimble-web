import styled from "styled-components";
import {fromPalette} from "../../../../theme/theme";

const AvailabilityIndicator = styled.div`
  height: 12px;
  background-color: ${({theme}) => fromPalette(theme, 'primary')};
`;


export default AvailabilityIndicator
