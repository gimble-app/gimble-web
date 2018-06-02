import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {NavigationLink} from "../common/NavigationLink";
import React from "react";

const BaseNavigationItem = ({ to, icon, isActive }) => (
  <NavigationLink to={to}>
    <BottomNavigationAction
      selected={isActive}
      showLabel
      label={to}
      icon={icon}
    />
  </NavigationLink>
);
export default BaseNavigationItem;
