import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const HEADER_HEIGHT_PX = 140;

const Header = styled(Paper)`
  background: url(${({image}) => image}) bottom;
  background-size: cover;
  background-color: ${({theme}) => theme.palette.primary.main};
  padding: ${({theme}) => theme.spacing.unit }px;
  min-height: ${HEADER_HEIGHT_PX}px;
`;

export default Header;
