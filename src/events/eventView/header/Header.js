import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import {withTheme} from "@material-ui/core/styles";

export const HEADER_HEIGHT_PX = 140;

const Header = withTheme()(styled(Paper)`
  background: url(${({image}) => image}) bottom;
  background-size: cover;
  background-color: ${({theme}) => theme.palette.primary.main};
  padding: ${({theme}) => theme.spacing.unit }px;
  min-height: ${HEADER_HEIGHT_PX}px;
`);

export default Header;
