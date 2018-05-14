import React from 'react'
import {Route, Switch} from 'react-router-dom';

import ProtectedRoute from '../auth/ProtectedRoute';
import LoginPage from '../auth/LoginPage';
import AuthenticatedRoutes from "./AuthenticatedRoutes";

const Navigation = ({ isLoggedIn }) =>
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute
          path="/"
          component={AuthenticatedRoutes}
          isAuthenticated={isLoggedIn}
        />
    </Switch>
    </div>

export default Navigation;
