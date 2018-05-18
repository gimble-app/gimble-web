import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import EventScreen from "../events/event/EventScreen";
import Screen from "./Screen";
import EventsPage from "../events/EventsPage";
import FriendsPage from "../friends/FriendsPage";
import ProfilePage from "../profile/ProfilePage";

export default () => (
  <Switch>
    <Route
      exact
      path="/event"
      component={EventScreen}
    />
    <Route
      exact
      path="/event/:id"
      component={EventScreen}
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
)
