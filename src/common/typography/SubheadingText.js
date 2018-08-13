import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import {fromPalette} from "../../theme";

const SubheadingText = withTheme()(styled.h3`
  font-size: 12px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 14px;
  margin: 0px;
  color: ${({theme}) => fromPalette(theme, 'darkGrey')};
`);

export default SubheadingText;

