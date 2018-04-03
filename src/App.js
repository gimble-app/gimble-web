import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
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

class App extends React.Component {

  state = {
    isAuthenticated: false
  };

  render() {
    const { classes } = this.props;
    return <Router>
      <div className={classes.root}>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={HomeScreen}
            isAuthenticated={this.state.isAuthenticated}
          />
          <Route path="/login" component={(props) => <LoginScreen onChange={
            auth => {
              this.setState({ isAuthenticated: auth });
            }
          } {...props}/>}
          />
        </Switch>
      </div>
    </Router>
  }
}


export default withStyles(styles)(App);
