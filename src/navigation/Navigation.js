import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../home/HomeScreen';
import EventScreen from '../event/EventScreen';
import ProtectedRoute from '../auth/ProtectedRoute';
import LoginScreen from '../auth/LoginScreen';

const Navigation = ({ isLoggedIn }) =>
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={HomeScreen}
        isAuthenticated={true}
      />
      <ProtectedRoute
        exact
        path="/event"
        component={EventScreen}
        isAuthenticated={true}
      />
      <ProtectedRoute
        exact
        path="/event/:id"
        component={EventScreen}
        isAuthenticated={true}
      />

      <Route path="/login" component={LoginScreen} />
    </Switch>

export default Navigation;