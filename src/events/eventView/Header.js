import Paper from "material-ui/Paper";
import {withTheme} from "material-ui/styles";
import styled from "styled-components";

const HEADER_HEIGHT_PX = 140;

const Header = withTheme()(styled(Paper)`
  background: ${({theme}) => theme.palette.primary.main};
  padding: ${({theme}) => theme.spacing.unit }px;
  min-height: ${HEADER_HEIGHT_PX}px;
`);

export default Header;
