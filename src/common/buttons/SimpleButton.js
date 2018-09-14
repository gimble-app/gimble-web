import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {fromPalette} from "../../theme/theme";

const SimpleButton = styled(Button)`
  && {
    width: 100px;
    box-shadow: 0 6px 6px 0 #CCCCCC;
    border: 2px ${({theme}) => fromPalette(theme, 'primary')} solid;
  }
`;

SimpleButton.displayName = 'SimpleButton';

export default SimpleButton;
