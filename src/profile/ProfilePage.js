import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import Avatar from "@material-ui/core/Avatar";
import {selectMyProfile} from "./selectors";
import Page from '../common/Page';
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";

export const ProfilePage = ({ profile = {} }) => (
  <Page>
    <Avatar src={profile && profile.photoURL }></Avatar>
    <LogoutMenuOption />
  </Page>
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
