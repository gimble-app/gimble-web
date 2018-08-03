import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {fromPalette} from "../theme";

export default withTheme()(styled.div`
  padding-left: 4px;
  flex: 1;
  color: ${({theme}) => fromPalette(theme, 'primaryContrast')};
`);
