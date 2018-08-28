import React from 'react';
import MaterialIconButton from '@material-ui/core/IconButton';
import MaterialCloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const CloseIcon = styled(MaterialCloseIcon)`
    color: ${({theme, colour}) => fromPalette(theme, colour, 'black')};
`;

const IconButton = styled(MaterialIconButton)`
  && {
    width: 32px;
    height: 32px;
  }
`;


const CancelButton = ({ onClick, colour}) => (
  <IconButton color="inherit" aria-label="cancel" onClick={onClick}>
    <CloseIcon colour={colour}/>
  </IconButton>
);

export default CancelButton;
