import styled from "styled-components";
import {fromPalette} from "../theme/theme";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({theme, colour}) => fromPalette(theme, colour, 'primary')};
  padding: ${({theme}) => theme.spacing.unit }px;
  height: 100px;
`;

export default Header;
