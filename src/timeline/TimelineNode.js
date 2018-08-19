import styled from 'styled-components';
import {fromPalette} from "../theme/theme";

export default styled.li`
   list-style-type:none;
   position: absolute;
   width: 40px;
   height: 40px;
   left: -20px;
   bottom: -20px;
   border-radius: 100%;
   box-sizing: border-box;
   border: 4px solid ${({theme}) => fromPalette(theme, 'primaryContrast')};
   background-color: ${({theme}) => fromPalette(theme, 'secondary')};
`;
