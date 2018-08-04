import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

export default withTheme()(styled.li`
  list-style-type:none;
  margin: 4px 0px;
`);
