import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import {fromPalette} from "../../theme";

const SubheadingText = withTheme()(styled.h3`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 24px;
  margin: 0px;
  color: ${({theme, colour}) => fromPalette(theme, colour, 'primary')};
`);

export default SubheadingText;

