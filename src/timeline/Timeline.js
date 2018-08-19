import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import {fromPalette} from "../theme/theme";

export default withTheme()(styled.ul`
  box-sizing: border-box;
  margin-top: 0;
  position: relative;
  padding: 0px;
  width: 4px;
  min-height: 80px;
  border: 2px solid ${({theme}) => fromPalette(theme, 'primary')};
`);
