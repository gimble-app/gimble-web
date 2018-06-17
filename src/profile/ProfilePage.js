import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import {selectMyProfile} from "./selectors";
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";
import FriendsPage from "../friends/FriendsPage";
import CentredFlex from "../common/layout/CentredFlex";
import BigAvatar from "../common/BigAvatar";
import TitleText from "../common/typography/TitleText";

const ProfilePanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

export const ProfilePage = ({ profile = {} }) => (
    <CentredFlex>
      <ProfilePanel>
        <BigAvatar src={profile && profile.photoURL }></BigAvatar>
        <TitleText>{ profile.profileName }</TitleText>
        <LogoutMenuOption />
      </ProfilePanel>
      <FriendsPage />
    </CentredFlex>
);

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => [
    myProfile(state),
  ]),
  connect(state => ({
    profile: selectMyProfile(state),
  }))
)(ProfilePage);
