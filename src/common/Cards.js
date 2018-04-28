import styled from 'styled-components';
import { withTheme } from 'material-ui/styles';

import BaseCard from 'material-ui/Card';

export const CardCollection = styled.div`
   display:flex;
   flex-wrap:wrap;
   align-content:end;
  flex-direction:column;
`;

export const Card = withTheme()(styled(BaseCard)`
   margin:${({theme}) => theme.spacing.unit * 3}px;
   max-width:400px;
`);
