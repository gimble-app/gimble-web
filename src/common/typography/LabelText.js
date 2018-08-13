import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import {fromPalette} from "../../theme";

const LabelText = withTheme()(styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 16px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour, 'primaryContrast')};
`);

export default LabelText;
