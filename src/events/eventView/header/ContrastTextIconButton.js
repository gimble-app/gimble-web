import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components/";
import {fromPalette} from "../../../theme/theme";

export default styled(IconButton)`
  color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`;
