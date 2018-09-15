import React from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {selectProfileFromUid} from "../../../profile/selectors";
import AvatarOrPlaceholder from "../../../common/avatars/AvatarOrPlaceholder";
import LabelText from "../../../common/typography/LabelText";

const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LabelledAvatarForProfile = ({profile}) =>
  <AvatarContainer>
    <AvatarOrPlaceholder key={profile.displayName} photoUrl={profile.photoURL} />
    <div style={{"marginTop": "4px"}}>
      <LabelText colour="primary">{profile.displayName}</LabelText>
    </div>
  </AvatarContainer>;

const mapStateToProps = (state, { uid }) => ({
  profile: selectProfileFromUid(state, uid),
});

export default connect(mapStateToProps)(LabelledAvatarForProfile);

