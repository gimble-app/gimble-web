import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import HomeScreen from './home/HomeScreen';
import ProtectedRoute from './auth/ProtectedRoute';
import LoginScreen from './auth/LoginScreen';

const styles = {
  root: {
    flexGrow: 1
  }
};

export class App extends React.Component {

  render() {
    const { classes } = this.props;

    return <Router>
      <div className={classes.root}>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={HomeScreen}
            isAuthenticated={this.props.isLoggedIn}
          />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})
 
export default withStyles(styles)(connect(
  mapStateToProps
)(App));
