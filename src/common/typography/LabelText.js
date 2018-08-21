import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const LabelText = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 16px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour, 'primaryContrast')};
`;

export default LabelText;
