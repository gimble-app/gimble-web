import {fromPalette} from "../theme";
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export default withTheme()(styled(Avatar)`
  border: 2px solid #ffffff;
  width: 80px;
  height: 80px;
  box-shadow: 0 0 0px 4px ${({theme}) => fromPalette(theme, 'secondary')};
  margin-bottom:${({theme}) => theme.spacing.unit * 2}px;
`);
