import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const TitleText = styled.h2`
  font-size: 20px;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 24px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour, 'primaryContrast')};
`;

export default TitleText;
