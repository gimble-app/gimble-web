import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {selectMyProfile} from "./selectors";
import Page from '../common/Page';
import LogoutMenuOption from "../auth/LogoutMenuOption";
import {myProfile} from "./firestoreQueries";

export const FriendsPage = ({ profile }) => (
  <Page>
    <p>Hi!</p>
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
)(FriendsPage);
