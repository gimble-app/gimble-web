import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './home/HomeScreen';
import ProtectedRoute from './auth/ProtectedRoute';
import LoginScreen from './auth/LoginScreen';

const Navigation = ({ isLoggedIn }) =>
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={HomeScreen}
        isAuthenticated={isLoggedIn}
      />
      <Route path="/login" component={LoginScreen} />
    </Switch>

export default Navigation;
