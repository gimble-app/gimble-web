import styled, { css } from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";
import {withTheme} from "@material-ui/core/styles/index";
import {fromPalette} from "../../theme/theme";

export default withTheme()(styled(ButtonBase)`
  && {
    width: 100px;
    height: 100px;
    box-shadow: 0 6px 6px 0 #CCCCCC;
    border: 4px ${({theme}) => fromPalette(theme, 'primary')} solid;
    background-color: ${({theme}) => fromPalette(theme, 'secondary')};
    color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
    border-radius: 100%;
    transition: background-color 0.5s ease-out;
    
    &[disabled] {
      border: 4px ${({theme}) => fromPalette(theme, 'grey')} solid;
      background-color: ${({theme}) => fromPalette(theme, 'grey')};
      transition: none;
    }
    
    ${props => props.right && css`
      position: relative;
      right: ${({right}) => right};
    `}
  }  
`);
