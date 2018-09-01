import React, {Fragment} from "react";
import MaterialTabs from "@material-ui/core/Tabs";
import Tab from "./Tab";

const TabLabel = ({ Icon, label }) =>
  <Fragment>
    <Icon />
    <span style={{paddingLeft: '8px'}}>{label}</span>
  </Fragment>;

const Tabs = ({ tabs, ...props }) => (
  <MaterialTabs { ...props }>
    {
      tabs.map(tab =>
        <Tab
          key={tab.label}
          icon={<TabLabel Icon={tab.icon} label={tab.label} />}
        />
      )
    }
  </MaterialTabs>
);

export default Tabs;
