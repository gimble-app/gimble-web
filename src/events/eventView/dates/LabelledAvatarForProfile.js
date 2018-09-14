import AvatarOrPlaceholder from "../../../common/avatars/AvatarOrPlaceholder";
import React from "react";
import {selectProfileFromUid} from "../../../profile/selectors";
import {connect} from "react-redux";
import LabelText from "../../../common/typography/LabelText";

const LabelledAvatarForProfile = ({profile}) =>
  <div style={{display: 'flex', marginLeft: '4px', alignItems: 'center', maxHeight: '40px'}}>
    <AvatarOrPlaceholder key={profile.displayName} photoUrl={profile.photoURL} />
    <span style={{paddingLeft: '4px'}}><LabelText>{profile.displayName}</LabelText></span>
  </div>;

const mapStateToProps = (state, { uid }) => ({
  profile: selectProfileFromUid(state, uid),
});

export default connect(mapStateToProps)(LabelledAvatarForProfile);

