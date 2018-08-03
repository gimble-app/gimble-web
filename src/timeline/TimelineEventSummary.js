import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {fromPalette} from "../theme";

export default withTheme()(styled.section`
  box-sizing: border-box;
  right: 100%;
  display: flex;
  height: 124px;
  max-width: 260px;
  min-width: 240px;
  border: 4px solid ${({theme}) => fromPalette(theme, 'primary')};
  border-radius: 20px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryLight')};
  padding: 8px 8px;
`);
