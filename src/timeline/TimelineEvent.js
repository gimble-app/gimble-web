import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

export default withTheme()(styled.li`
  list-style-type:none;
  position: relative;
  margin: 16px 0px;
  right: 120px;
`);
