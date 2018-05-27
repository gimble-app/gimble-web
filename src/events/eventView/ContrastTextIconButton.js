import IconButton from 'material-ui/IconButton';
import styled from "styled-components/";
import {withTheme} from "material-ui/styles";
import {fromPalette} from "../../theme";

export default withTheme()(styled(IconButton)`
  color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`);
