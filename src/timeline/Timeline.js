import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import {fromPalette} from "../theme";

export default withTheme()(styled.ul`
  box-sizing: border-box;
  margin-top: 0;
  position: relative;
  padding: 0px;
  width: 0px;
  border-left: 4px solid ${({theme}) => fromPalette(theme, 'primary')};

  &::after {
   content: '';
   display: inline-block;
   position: relative;
   width: 40px;
   height: 40px;
   bottom: -20px;
   right: 22px;
   border-radius: 100%;
   border-width: 4px;
   box-sizing: border-box;
   border-style: solid;
   border-color: ${({theme}) => fromPalette(theme, 'primaryContrast')};
   background-color: ${({theme}) => fromPalette(theme, 'secondary')};
  }
`);
