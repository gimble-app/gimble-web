import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import {fromPalette} from "../../theme";

const DisplayText = withTheme()(styled.h1`
  font-size: 24px;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 24px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour) || fromPalette(theme, 'primaryContrast')};
`);

export default DisplayText;
