import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import {selectMyProfile} from "./selectors";
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";
import FriendsPage from "../friends/FriendsPage";
import {withTheme} from "@material-ui/core/styles/index";
import {fromPalette} from "../theme";
import FlexContainer from "../common/FlexContainer";

export const BigAvatar = withTheme()(styled(Avatar)`
  border: 2px solid #ffffff;
  width: 80px;
  height: 80px;
  box-shadow: 0 0 0px 4px ${({theme}) => fromPalette(theme, 'secondary')};
  margin-bottom:${({theme}) => theme.spacing.unit * 2}px;
`);

const CenteredFlex = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  flex-direction: column; 
`;

const ProfilePanel = withTheme()(styled(CenteredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

export const ProfilePage = ({ profile = {} }) => (
    <CenteredFlex>
      <ProfilePanel>
        <BigAvatar src={profile && profile.photoURL }></BigAvatar>
        <LogoutMenuOption />
      </ProfilePanel>
      <FriendsPage />
    </CenteredFlex>
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
