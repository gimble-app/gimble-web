import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import EventNote from '@material-ui/icons/EventNote';
import Group from '@material-ui/icons/Group';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ToolbarTitleText from '../common/ToolbarTitleText';
import {NavigationLink} from "../common/NavigationLink";

export default ({ children }) => (
  <Fragment>
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarTitleText />
        <NavItem to="friends"><Group /></NavItem>
        <NavItem to="events"><EventNote /></NavItem>
        <NavItem to="profile"><AccountCircle /></NavItem>
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
