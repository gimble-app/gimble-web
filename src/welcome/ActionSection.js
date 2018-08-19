import styled from 'styled-components';
import {fromPalette} from "../theme/theme";

export default styled.section`
  box-sizing: border-box;
  width: 240px;
  border: 4px solid ${({theme}) => fromPalette(theme, 'primary')};
  border-radius: 20px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryContrast')};
  padding: 16px;
`;
