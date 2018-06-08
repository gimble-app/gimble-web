import React from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import FadingAppBar from "./FadingAppBar";

const SpacedTabs = styled(Tabs)`
  .MuiTabs-flexContainer-37 {
    display: flex;
    justify-content: space-evenly;  
  }
`;

SpacedTabs.displayName = "SpacedTabs";

const HomeAppBar = ({ onSelect, value }) => (
  <FadingAppBar>
    <SpacedTabs fullWidth value={value} onChange={onSelect}>
      <Tab icon={<EventNoteIcon />} />
      <Tab icon={<ProfileIcon />} />
    </SpacedTabs>
  </FadingAppBar>
);

export default HomeAppBar;
