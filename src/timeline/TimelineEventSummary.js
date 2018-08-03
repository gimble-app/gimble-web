import styled from 'styled-components';
import {withTheme} from '@material-ui/core/styles';
import {fromPalette} from "../theme";

export default withTheme()(styled.section`
  box-sizing: border-box;
  display: flex;
  height: 124px;
  width: 240px;
  border: 4px solid ${({theme}) => fromPalette(theme, 'primary')};
  border-radius: 20px;
  background-color: ${({theme}) => fromPalette(theme, 'primaryLight')};
  padding: 8px 8px;
`);
