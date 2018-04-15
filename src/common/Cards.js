import styled from 'styled-components';
import BaseCard from 'material-ui/Card';

export const CardCollection = styled.div`
   display:flex;
   flex-wrap:wrap;
   align-content:end;
  flex-direction:column;
`;

export const Card = styled(BaseCard)`
   margin:12px;
   max-width:400px;
`
