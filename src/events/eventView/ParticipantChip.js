import React from 'react';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from '@material-ui/icons/Face';

const AvatarOrPlaceholder = ({ photoUrl }) => (
  photoUrl
    ? <Avatar src={photoUrl} />
    : <Avatar><FaceIcon /></Avatar>
);

const ParticipantChip = ({ participant }) => <Chip
  avatar={ <AvatarOrPlaceholder photoUrl={participant.photoUrl} /> }
  label={participant.displayName}
  key={participant.uid}
/>;

export default ParticipantChip;
