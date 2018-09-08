import styled from "styled-components";
import {fromPalette} from "../theme/theme";

const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border-radius: 8px;
  background-color: ${({theme, colour}) => fromPalette(theme, colour, 'primaryLight')};
`;

export default Chip;
