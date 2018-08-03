import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import {fromPalette} from "../theme";

export default withTheme()(styled.ul`
  box-sizing: border-box;
  margin-top: 0;
  position: relative;
  padding: 0px;
  width: 0px;
  left: -1px;
  border-left: 4px solid ${({theme}) => fromPalette(theme, 'primary')};
  padding-bottom: ${({endPadding}) => endPadding || '0px'};
`);
