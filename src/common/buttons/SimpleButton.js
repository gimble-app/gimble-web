import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {fromPalette} from "../../theme/theme";

const SimpleButton = styled(Button)`
  && {
    max-width: 200px;
    border: 2px ${({theme}) => fromPalette(theme, 'primary')} solid;
  }
`;

SimpleButton.displayName = 'SimpleButton';

export default SimpleButton;
