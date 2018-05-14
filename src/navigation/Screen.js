import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarTitleText from '../common/ToolbarTitleText';
import ProfileMenu from './ProfileMenu';
import {NavigationLink} from "../common/NavigationLink";

export default ({ children }) => (
  <Fragment>
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarTitleText></ToolbarTitleText>
        <NavigationLink to="friends">F</NavigationLink>
        <NavigationLink to="events">E</NavigationLink>
        <ProfileMenu/>
      </Toolbar>
    </AppBar>
    { children }
  </Fragment>
);
