import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Screen from './Screen';
import EventScreen from '../events/event/EventScreen';
import EventsPage from '../events/EventsPage';

import ProtectedRoute from '../auth/ProtectedRoute';
import LoginPage from '../auth/LoginPage';
import FriendsPage from "../friends/FriendsPage";

const Navigation = ({ isLoggedIn }) =>
    <Switch>
      <ProtectedRoute
        exact
        path="/friends"
        render={() => (
          <Screen>
            <FriendsPage />
          </Screen>
        )}
        isAuthenticated={isLoggedIn}
      />
      <ProtectedRoute
        exact
        path="/"
        render={() => (
          <Screen>
            <EventsPage />
          </Screen>
        )}
        isAuthenticated={isLoggedIn}
      />
      <ProtectedRoute
        exact
        path="/event"
        component={EventScreen}
        isAuthenticated={isLoggedIn}
      />
      <ProtectedRoute
        exact
        path="/event/:id"
        component={EventScreen}
        isAuthenticated={isLoggedIn}
      />
      <Route path="/login" component={LoginPage} />
    </Switch>

export default Navigation;
