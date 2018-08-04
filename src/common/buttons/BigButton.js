import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";
import {withTheme} from "@material-ui/core/styles/index";
import {fromPalette} from "../../theme";

export default withTheme()(styled(ButtonBase)`
  && {
    width: 100px;
    height: 100px;
    box-shadow: 0 6px 6px 0 #CCCCCC;
    margin-bottom:${({theme}) => theme.spacing.unit * 2}px;
    border: 4px ${({theme}) => fromPalette(theme, 'primary')} solid;
    border-radius: 100%;
  }
`);
