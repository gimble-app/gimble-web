import styled from 'styled-components';
import {fromPalette} from "../theme/theme";

export default styled.div`
  padding-left: 4px;
  flex: 1;
  color: ${({theme}) => fromPalette(theme, 'primaryContrast')};
`;
