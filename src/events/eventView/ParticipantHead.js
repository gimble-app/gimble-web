import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from '@material-ui/icons/Face';
import CaptionText from "../../common/typography/CaptionText";
import Figure from "../../common/Figure";
import FigCaption from "../../common/FigCaption";

const AvatarOrPlaceholder = ({ photoUrl }) => (
  photoUrl
    ? <Avatar src={photoUrl} />
    : <Avatar><FaceIcon /></Avatar>
);

const ParticipantHead = ({ participant }) =>
  <Figure>
    <AvatarOrPlaceholder photoUrl={participant.photoUrl} />
    <FigCaption><CaptionText>{participant.displayName}</CaptionText></FigCaption>
  </Figure>;

export default ParticipantHead;
