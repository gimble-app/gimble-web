import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import EventNote from '@material-ui/icons/EventNote';
import Group from '@material-ui/icons/Group';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {NavigationLink} from "../common/NavigationLink";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import withRouter from "react-router-dom/withRouter";

export default withRouter(({ children, location }) => (
  <Fragment>
    <AppBar position="sticky">
      <BottomNavigation>
        <NavItem currentPath={location.pathname} to="friends" icon={<Group />} />
        <NavItem currentPath={location.pathname} to="events" icon={<EventNote />} />
        <NavItem currentPath={location.pathname} to="profile" icon={<AccountCircle />} />
      </BottomNavigation>
    </AppBar>
    { children }
  </Fragment>
))

const NavItem = ({ to, icon, children, currentPath }) => (
  <NavigationLink to={to}>
    <BottomNavigationAction selected={currentPath.includes(to)} showLabel label={to} icon={icon} />
  </NavigationLink>
);
