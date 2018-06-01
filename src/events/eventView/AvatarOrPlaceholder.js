import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from '@material-ui/icons/Face';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/";
import {fromPalette} from "../../theme";

const BorderedAvatar = withTheme()(styled(Avatar)`
  border: 1px solid ${({theme}) => fromPalette(theme, 'secondaryContrast')};
`);


const AvatarOrPlaceholder = ({ photoUrl }) => (
  photoUrl
    ? <BorderedAvatar src={photoUrl} />
    : <BorderedAvatar><FaceIcon /></BorderedAvatar>
);
export default AvatarOrPlaceholder;
