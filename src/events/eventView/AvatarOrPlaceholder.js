import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from '@material-ui/icons/Face';
import styled from "styled-components/";
import {fromPalette} from "../../theme/theme";

const BorderedAvatar = styled(Avatar)`
  box-shadow: 0px 1px 1px 1px ${({theme}) => fromPalette(theme, 'darkGrey')};
  border: 1px solid ${({theme}) => fromPalette(theme, 'secondaryContrast')};
  right: -${({position}) => position * 24}px;
`;


const AvatarOrPlaceholder = ({ photoUrl, position }) => (
  photoUrl
    ? <BorderedAvatar position={position} src={photoUrl} />
    : <BorderedAvatar position={position}><FaceIcon /></BorderedAvatar>
);
export default AvatarOrPlaceholder;
