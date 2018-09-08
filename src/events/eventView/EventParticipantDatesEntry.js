import React from "react";
import {connect} from "react-redux";
import styled from 'styled-components';
import AvatarOrPlaceholder from "../../common/avatars/AvatarOrPlaceholder";
import LabelText from "../../common/typography/LabelText";
import BodyText from "../../common/typography/BodyText";
import {selectProfileFromUid} from "../../profile/selectors";
import {selectCurrentUserId} from "../../auth/selectors";
import AddDateHandler from "./dayHandler/AddDateHandler";

const DatesEntryContainer = styled.div`
  flex: 1;
  max-width: 150px;
  margin: 8px;
`;

const LabelledAvatar = ({displayName, photoUrl}) =>
  <div style={{display: 'flex' }}>
    <AvatarOrPlaceholder key={displayName} photoUrl={photoUrl} />
    <LabelText colour="primary">{displayName}</LabelText>
  </div>;


const EventParticipantDatesEntry = ({profile, participant, isMe, event}) => (
    <DatesEntryContainer>
      <LabelledAvatar displayName={profile.displayName} photoUrl={profile.photoURL} />
      { isMe &&  <AddDateHandler participant={participant} event={event} /> }
      { !participant.preferredDates && <BodyText>no dates added yet...</BodyText> }
    </DatesEntryContainer>
  );


const mapStateToProps = (state, { participant }) => ({
  profile: selectProfileFromUid(state, participant.uid),
  isMe: selectCurrentUserId(state) === participant.uid
});

export default connect(mapStateToProps)(EventParticipantDatesEntry);