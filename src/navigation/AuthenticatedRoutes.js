import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {myProfileWithFriends} from "../profile/firestoreQueries";
import {selectIsLoggedIn} from "../auth/selectors";
import PageSlideIn from "../common/animation/PageSlideIn";
import PageFadeIn from "../common/animation/PageFadeIn";
import EventScreen from "../events/eventEdit/EventScreen";
import TimelineScreen from "../timeline/TimelineScreen";
import InviteScreen from "../invites/InviteScreen";
import ProfileScreen from "../profile/ProfileScreen";
import EventPage from "../events/eventView/EventPage";
import AddFriendPage from "../events/eventView/friends/AddFriendPage";
import NewEventPage from "../events/new/NewEventPage";

const PUSH_ACTION = "PUSH";

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/event" component={NewEventPage} />
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
    <Route exact path="/timeline" component={TimelineScreen} />
    <Route
      exact
      path="/profile"
      render={() => <PageFadeIn><ProfileScreen/></PageFadeIn>}/>
    <Redirect from="/" to="/timeline" />
  </Switch>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(
  state => selectIsLoggedIn(state) ? [myProfileWithFriends(state)] : null
  )
)(AuthenticatedRoutes);
