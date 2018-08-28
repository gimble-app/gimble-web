import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import {fromPalette} from "../theme/theme";

const DetailedHeader = styled.header`
  background: url(${({image}) => image}) bottom;
  background-size: cover;
  background-color: ${({theme, colour}) => fromPalette(theme, colour, 'primary')};
  box-shadow: 0px 3px 6px 0px;
  color:  ${({theme}) => fromPalette(theme, 'grey')};
  padding: ${({theme}) => theme.spacing.unit }px;
  height: 140px;
`;

DetailedHeader.displayName = "DetailedHeader";

export default DetailedHeader;
