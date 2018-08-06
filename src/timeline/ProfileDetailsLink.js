import {InternalLink} from "../common/InternalLinks";
import BigAvatar from "../common/BigAvatar";
import BigButton from "../common/buttons/BigButton";
import React from "react";

const ProfileDetailsLink = ({profile}) => (
  <InternalLink to="profile">
    <BigButton>
      <BigAvatar src={profile && profile.photoURL}/>
    </BigButton>
  </InternalLink>
);

export default ProfileDetailsLink
