import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import {firestoreConnect} from "react-redux-firebase";
import {firebaseConnect} from "react-redux-firebase";
import {compose} from "redux";
import EventScreen from "../events/eventEdit/EventScreen";
import Screen from "./BaseScreen";
import EventsPage from "../events/EventsPage";
import FriendsPage from "../friends/FriendsPage";
import ProfilePage from "../profile/ProfilePage";
import EventPage from "../events/eventView/EventPage";
import AddFriendPage from "../events/eventView/friends/AddFriendPage";
import {myProfileWithFriends} from "../profile/firestoreQueries";
import {selectIsLoggedIn} from "../auth/selectors";
import PageSlideIn from "../common/animation/PageSlideIn";
import PageFadeIn from "../common/animation/PageFadeIn";

const PUSH_ACTION = "PUSH";

const AuthenticatedRoutes = () => (
  <Switch>
    <Route
      exact
      path="/event"
      component={EventScreen}
    />
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
    <Route
      exact
      path="/event/:id/edit"
      component={EventScreen}
    />
    <Route
      exact
      path="/event/:id/participants"
      children={({match}) => match && <PageSlideIn><AddFriendPage match={match}/></PageSlideIn>}
    />

    <Route render={() => (
      <Screen>
        <Switch>
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/friends" component={FriendsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Redirect to="/events" />
        </Switch>
      </Screen>
    )} />
  </Switch>
);

export default compose(
  firebaseConnect(),
  firestoreConnect(
  state => selectIsLoggedIn(state) ? [myProfileWithFriends(state)] : null
  )
)(AuthenticatedRoutes);
