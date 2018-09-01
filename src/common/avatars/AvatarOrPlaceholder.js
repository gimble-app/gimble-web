import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from "./Avatar";

const AvatarOrPlaceholder = ({ photoUrl, position }) => (
  photoUrl
    ? <Avatar position={position} src={photoUrl} />
    : <Avatar position={position}><FaceIcon /></Avatar>
);
export default AvatarOrPlaceholder;
