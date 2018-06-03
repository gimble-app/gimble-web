import Tab from "@material-ui/core/Tab";
import {NavigationLink} from "../common/NavigationLink";
import React from "react";

const BaseNavigationItem = ({ to, icon }) => (
  <NavigationLink to={to}>
    <Tab
      value={to}
      icon={icon}
    />
  </NavigationLink>
);
export default BaseNavigationItem;
