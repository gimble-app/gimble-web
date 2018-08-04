import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

export default withTheme()(styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`);
