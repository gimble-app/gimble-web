import styled from "styled-components";
import {fromPalette} from "../theme/theme";

const DetailedHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: url(${({image}) => image}) bottom;
  background-size: cover;
  background-color: ${({theme, colour}) => fromPalette(theme, colour, 'primary')};
  box-shadow: 0px 3px 6px 0px;
  color:  ${({theme}) => fromPalette(theme, 'grey')};
  padding: ${({theme}) => theme.spacing.unit * 2}px;
  height: 140px;
`;

DetailedHeader.displayName = "DetailedHeader";

export default DetailedHeader;
