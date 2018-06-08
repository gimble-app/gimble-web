import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import EventScreen from "../events/eventEdit/EventScreen";
import HomeScreen from "./HomeScreen";
import EventPage from "../events/eventView/EventPage";
import AddFriendPage from "../events/eventView/friends/AddFriendPage";
import {myProfileWithFriends} from "../profile/firestoreQueries";
import {selectIsLoggedIn} from "../auth/selectors";
import PageSlideIn from "../common/animation/PageSlideIn";
import PageFadeIn from "../common/animation/PageFadeIn";
import InviteScreen from "../invites/InviteScreen";

const PUSH_ACTION = "PUSH";

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/event" component={EventScreen} />
    <Route
      exact
      path="/event/:id"
      children={({match, history}) => (
        match &&
          history.action === PUSH_ACTION
          ? <PageFadeIn><EventPage match={match}/></PageFadeIn>
          : <EventPage match={match}/>
      )}
    />
    <Route exact path="/event/:id/edit" component={EventScreen} />
    <Route
      exact
      path="/event/:id/participants"
      children={({match}) => match && <PageSlideIn><AddFriendPage match={match}/></PageSlideIn>}
    />
    <Route exact path="/invites" component={InviteScreen} />
    <Route exact path={'/'} component={HomeScreen} />
  </Switch>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(
  state => selectIsLoggedIn(state) ? [myProfileWithFriends(state)] : null
  )
)(AuthenticatedRoutes);
