import React from 'react';
import MaterialIconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const IconButton = styled(MaterialIconButton)`
  && {
    color: ${({theme, colour}) => fromPalette(theme, colour, 'black')};
  }
`;

const SimpleIconButton = ({ onClick, colour, ariaLabel, children }) => (
  <IconButton onClick={onClick} colour={colour} aria-label={ariaLabel}>
    {children}
  </IconButton>
);

export default SimpleIconButton;
