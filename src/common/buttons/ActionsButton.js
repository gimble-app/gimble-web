import React from 'react';
import MaterialIconButton from '@material-ui/core/IconButton';
import MaterialMoreVertIcon from '@material-ui/icons/MoreVert';
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const MoreVertIcon = styled(MaterialMoreVertIcon)`
    color: ${({theme, colour}) => fromPalette(theme, colour, 'primaryContrast')};
`;

const IconButton = styled(MaterialIconButton)`
  && {
    width: 32px;
    height: 32px;
  }
`;

const ActionsButton = ({ colour, ...props}) => (
  <IconButton {...props}>
    <MoreVertIcon colour={colour}/>
  </IconButton>
);

export default ActionsButton;
