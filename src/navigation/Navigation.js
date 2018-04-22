import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../home/HomeScreen';
import EventScreenDataContainer from '../event/EventScreenDataContainer';
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
        component={EventScreenDataContainer}
        isAuthenticated={true}
      />
      <ProtectedRoute
        exact
        path="/event/:id"
        component={EventScreenDataContainer}
        isAuthenticated={true}
      />

      <Route path="/login" component={LoginScreen} />
    </Switch>

export default Navigation;
