import React from 'react';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const ParticipantChip = ({ participant }) => <Chip
  avatar={<Avatar src={participant.photoUrl} />}
  label={participant.displayName}
  key={participant.uid}
/>

export default ParticipantChip;
