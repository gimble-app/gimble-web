import styled from 'styled-components';
import BaseCard from '@material-ui/core/Card';

export default styled(BaseCard)`
   margin:${({theme}) => theme.spacing.unit * 1.5}px;
   max-width:400px;
`;
