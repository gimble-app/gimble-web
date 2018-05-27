import IconButton from '@material-ui/core/IconButton';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/";
import {fromPalette} from "../../theme";

export default withTheme()(styled(IconButton)`
  color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`);
