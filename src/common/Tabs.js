import React from "react";
import MaterialTabs from "@material-ui/core/Tabs";
import Tab from "./Tab";

const TabLabel = ({ Icon, label }) => [
  <Icon />,
  <span style={{paddingLeft: '8px'}}>{label}</span>
];

const Tabs = ({ tabs, ...props }) => (
  <MaterialTabs { ...props }>
    {
      tabs.map(tab =>
        <Tab icon={<TabLabel Icon={tab.icon} label={tab.label} />} />
      )
    }
  </MaterialTabs>
);

export default Tabs;
