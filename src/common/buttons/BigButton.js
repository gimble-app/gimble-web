import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";
import {fromPalette} from "../../theme/theme";

const BigButton = styled(ButtonBase)`
  && {
    width: 100px;
    height: 100px;
    box-shadow: 0 6px 6px 0 #CCCCCC;
    border: 4px ${({theme}) => fromPalette(theme, 'primary')} solid;
    border-radius: 100%;
  }
`;

BigButton.displayName = 'BigButton';

export default BigButton;
