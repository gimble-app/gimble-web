import React from 'react'
import {Route, Switch} from 'react-router-dom';
import EventScreen from "../events/event/EventScreen";
import Screen from "./Screen";
import EventsPage from "../events/EventsPage";

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Screen>
          <EventsPage/>
        </Screen>
      )}
    />
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
  </Switch>
)
