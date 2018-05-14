import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import EventNote from 'material-ui-icons/EventNote';
import Group from 'material-ui-icons/Group';
import ToolbarTitleText from '../common/ToolbarTitleText';
import ProfileMenu from './ProfileMenu';
import {NavigationLink} from "../common/NavigationLink";

export default ({ children }) => (
  <Fragment>
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarTitleText></ToolbarTitleText>
        <NavItem to="friends"><Group /></NavItem>
        <NavItem to="events"><EventNote /></NavItem>
        <ProfileMenu/>
      </Toolbar>
    </AppBar>
    { children }
  </Fragment>
);

const NavItem = ({ to, children }) => (

  <IconButton
    color="inherit"
  >
    <NavigationLink to={to}>{children}</NavigationLink>
  </IconButton>
)
