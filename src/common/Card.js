import styled from 'styled-components';
import { withTheme } from 'material-ui/styles';
import BaseCard from 'material-ui/Card';

export default withTheme()(styled(BaseCard)`
   margin:${({theme}) => theme.spacing.unit * 1.5}px;
   max-width:400px;
`);
