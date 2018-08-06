import React from 'react';
import styled from "styled-components";
import NewEventLink from "./NewEventLink";
import ProfileDetailsLink from "./ProfileDetailsLink";

const SpacedAroundFlex = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justifyContent: space-around;
  alignItems: flex-end;
`;

const TimelineHeader = (profile) => (
<SpacedAroundFlex>
  <span style={{flex: 1}}/>
  <ProfileDetailsLink profile={profile}/>
  <NewEventLink/>
</SpacedAroundFlex>
);

export default TimelineHeader
