import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MaterialCloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const CloseIcon = styled(MaterialCloseIcon)`
    color: ${({theme, colour}) => fromPalette(theme, colour, 'black')};
`;

const CancelButton = ({ onClick, colour}) => (
  <IconButton color="inherit" aria-label="cancel" onClick={onClick}>
    <CloseIcon colour={colour}/>
  </IconButton>
);

export default CancelButton;
