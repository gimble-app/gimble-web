import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import EventScreen from "../events/event/EventScreen";
import Screen from "./Screen";
import EventsPage from "../events/EventsPage";

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
          <Redirect to="/events" />
        </Switch>
      </Screen>
    )} />

  </Switch>
)
