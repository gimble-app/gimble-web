import styled from 'styled-components';
import Button from 'material-ui/Button';
import { withTheme } from "material-ui/styles/index";

export default withTheme()(styled(Button)`
    position:fixed;
    bottom: ${({theme}) => theme.spacing.unit * 2}px;
    right: ${({theme}) => theme.spacing.unit * 2}px;
`);
