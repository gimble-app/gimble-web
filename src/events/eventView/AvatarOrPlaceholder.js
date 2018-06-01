import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from '@material-ui/icons/Face';

const AvatarOrPlaceholder = ({ photoUrl }) => (
  photoUrl
    ? <Avatar src={photoUrl} />
    : <Avatar><FaceIcon /></Avatar>
);
export default AvatarOrPlaceholder;
