import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const BodyText = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 24px;
  margin: 0;
  color: ${({theme}) => fromPalette(theme, 'black')};
`;

export default BodyText;


