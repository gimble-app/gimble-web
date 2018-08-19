import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const FieldHeadingText = styled.span`
  font-size: 12px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 14px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour, 'grey')};
`;

export default FieldHeadingText;

