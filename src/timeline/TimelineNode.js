import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import {fromPalette} from "../theme";

export default withTheme()(styled.li`
   list-style-type:none;
   position: absolute;
   width: 40px;
   height: 40px;
   left: -20px;
   bottom: -20px;
   border-radius: 100%;
   border-width: 4px;
   box-sizing: border-box;
   border-style: solid;
   border-color: ${({theme}) => fromPalette(theme, 'primaryContrast')};
   background-color: ${({theme}) => fromPalette(theme, 'secondary')};
`);
