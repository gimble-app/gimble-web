import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from "react-redux-firebase";
import styled from "styled-components";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Navigation from './navigation/Navigation';
import {selectIsLoggedIn} from './auth/selectors';
import Notifier from './notifications/Notifier';
import FriendDataPopulator from "./friends/FriendDataPopulator";
import ProfileActionsDialog from "./welcome/WelcomeActionsDialog";

const FullScreen = styled.article`
  min-height: 100vh;
  width: 100%;
`;
FullScreen.displayName = "FullScreen";

export const App = ({ isLoggedIn }) => (
  <FullScreen>
    <BrowserRouter>
      <Navigation isLoggedIn={isLoggedIn}/>
    </BrowserRouter>
    <Notifier />
    { isLoggedIn && <FriendDataPopulator /> }
    { isLoggedIn && <ProfileActionsDialog /> }
  </FullScreen>
);

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App)
