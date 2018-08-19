import styled from 'styled-components';
import {fromPalette} from "../theme/theme";

export default styled.section`
  box-sizing: border-box;
  display: flex;
  height: 160px;
  width: 240px;
  border: 4px solid ${({theme}) => fromPalette(theme, 'primary')};
  border-radius: 20px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryLight')};
  background-image: url(${({image}) => image && image.src});
  padding: 8px 8px;
`;
