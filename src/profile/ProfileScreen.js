import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {selectMyProfile} from "./selectors";
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";
import FriendsPage from "../friends/FriendsPage";
import CentredFlex from "../common/layout/CentredFlex";
import TitleText from "../common/typography/TitleText";
import BackButton from "../common/buttons/HistoryAwareBackButton";
import CentredPanel from "../common/CentredPanel";
import BorderedBigAvatar from "../common/avatars/BorderedBigAvatar";

export const ProfileScreen = ({ profile = {} }) => (
  <CentredFlex>
    <BackButton />
    <CentredPanel>
      <BorderedBigAvatar src={profile && profile.photoURL } />
      <TitleText>{ profile.profileName }</TitleText>
      <LogoutMenuOption />
    </CentredPanel>
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
)(ProfileScreen);
