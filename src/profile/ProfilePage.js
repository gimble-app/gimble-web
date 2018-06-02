import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import {selectMyProfile} from "./selectors";
import Page from '../common/Page';
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";
import TitleText from "../common/typography/TitleText";

export const BigAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
`;

const CenteredPage = styled(Page)`
  height: 75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ProfilePage = ({ profile = {} }) => (
  <CenteredPage>
    <TitleText> Hey { profile.displayName } </TitleText>
    <BigAvatar src={profile && profile.photoURL }></BigAvatar>
    <LogoutMenuOption />
  </CenteredPage>
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
