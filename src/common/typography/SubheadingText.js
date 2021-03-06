import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const SubheadingText = styled.h3`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 24px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour, 'primary')};
`;

export default SubheadingText;

