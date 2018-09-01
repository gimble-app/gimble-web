import React from "react";
import {connect} from "react-redux";
import AvatarOrPlaceholder from "../../common/avatars/AvatarOrPlaceholder";
import LabelText from "../../common/typography/LabelText";
import {selectProfileFromUid} from "../../profile/selectors";

const EventParticipantDatesEntry = ({profile}) =>
  <div style={{display: 'flex', flex: 1, maxWidth: "150px", margin: '8px'}}>
    <AvatarOrPlaceholder key={profile.displayName} photoUrl={profile.photoURL} />
    <LabelText colour="primary">{profile.displayName}</LabelText>
  </div>;

const mapStateToProps = (state, { uid }) => ({
  profile: selectProfileFromUid(state, uid)
});

export default connect(mapStateToProps)(EventParticipantDatesEntry);
