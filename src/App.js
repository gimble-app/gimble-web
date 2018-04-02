import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import HomeScreen from './home/HomeScreen';
import ProtectedRoute from './auth/ProtectedRoute';
import LoginScreen from './auth/LoginScreen';

const styles = {
  root: {
    flexGrow: 1
  }
};

const App = ({ classes }) =>
    <Router>
      <div className={classes.root}>
        <ProtectedRoute exact path="/" component={HomeScreen} isAuthenticated />
        <Route path="/login" component={LoginScreen} />
      </div>
    </Router>


export default withStyles(styles)(App);
