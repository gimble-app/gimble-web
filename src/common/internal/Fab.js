import styled from 'styled-components';
import Button from 'material-ui/Button';
import { withTheme } from "material-ui/styles/index";

export default withTheme()(styled(Button)`
    margin:${({theme}) => theme.spacing.unit}px;
    position:fixed;
    bottom: 0;
    right: 0;
`);

