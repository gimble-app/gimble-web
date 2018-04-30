import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../events/EventsScreen';
import EventScreen from '../events/event/EventScreen';
import ProtectedRoute from '../auth/ProtectedRoute';
import LoginScreen from '../auth/LoginScreen';

const Navigation = ({ isLoggedIn }) =>
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={HomeScreen}
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

      <Route path="/login" component={LoginScreen} />
    </Switch>

export default Navigation;
