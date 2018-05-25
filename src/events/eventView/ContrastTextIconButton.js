import IconButton from 'material-ui/IconButton';
import styled from "styled-components/";
import {withTheme} from "material-ui/styles";

export default withTheme()(styled(IconButton)`
  color: ${({theme}) => theme.palette.secondary.contrastText};
`);
