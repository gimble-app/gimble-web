import React from "react";
import {
  firebaseConnect,
  firestoreConnect,
  isLoaded
} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import ProfileSetupPage from "./ProfileSetupPage";
import {selectMyProfile} from "../profile/selectors";
import {myProfile} from "../profile/firestoreQueries";

const WelcomeActionsDialog = ({profile = {}}) => (
  <Dialog
    open={isLoaded(profile) && !profile.profileName}
    fullScreen
    transitionDuration={{ enter: 0, exit: 10 }}
  >
    <DialogContent>
      <ProfileSetupPage profile={profile}/>
    </DialogContent>
  </Dialog>
);

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => [
    myProfile(state),
  ]),
  connect(state => ({
    profile: selectMyProfile(state),
  }))
)(WelcomeActionsDialog);
