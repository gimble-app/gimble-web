import styled, { css } from "styled-components";
import {fromPalette} from "../../theme/theme";
import BigButton from "./BigButton";

const BigRedButton = styled(BigButton)`
    && {
    transition: background-color 0.5s ease-out;
    background-color: ${({theme}) => fromPalette(theme, 'secondary')};
    color: ${({theme}) => fromPalette(theme, 'secondaryContrast')};

    &[disabled] {
      border: 4px ${({theme}) => fromPalette(theme, 'grey')} solid;
      background-color: ${({theme}) => fromPalette(theme, 'grey')};
      transition: none;
    }
    
    ${props => props.right && css`
      position: relative;
      right: ${({right}) => right};
    `}
    }
    
`;

BigRedButton.displayName = 'BigRedButton';

export default BigRedButton;
