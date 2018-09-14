import AvatarOrPlaceholder from "../../../common/avatars/AvatarOrPlaceholder";
import React from "react";
import {selectProfileFromUid} from "../../../profile/selectors";
import {connect} from "react-redux";
import LabelText from "../../../common/typography/LabelText";

const LabelledAvatarForProfile = ({profile}) =>
  <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    <AvatarOrPlaceholder key={profile.displayName} photoUrl={profile.photoURL} />
    <LabelText colour="primary">{profile.displayName}</LabelText>
  </div>;

const mapStateToProps = (state, { uid }) => ({
  profile: selectProfileFromUid(state, uid),
});

export default connect(mapStateToProps)(LabelledAvatarForProfile);

