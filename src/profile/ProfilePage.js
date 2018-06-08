import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import {withTheme} from "@material-ui/core/styles";
import {selectMyProfile} from "./selectors";
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";
import FriendsPage from "../friends/FriendsPage";
import {fromPalette} from "../theme";
import CentredFlex from "../common/layout/CentredFlex";

export const BigAvatar = withTheme()(styled(Avatar)`
  border: 2px solid #ffffff;
  width: 80px;
  height: 80px;
  box-shadow: 0 0 0px 4px ${({theme}) => fromPalette(theme, 'secondary')};
  margin-bottom:${({theme}) => theme.spacing.unit * 2}px;
`);


const ProfilePanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

export const ProfilePage = ({ profile = {} }) => (
    <CentredFlex>
      <ProfilePanel>
        <BigAvatar src={profile && profile.photoURL }></BigAvatar>
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
