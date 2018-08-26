import React from 'react';
import styled from "styled-components";
import NewEventLink from "./NewEventLink";
import ProfileDetailsLink from "./ProfileDetailsLink";
import {fromPalette} from "../theme/theme";

const SpacedAroundFlex = styled.div`
  position: sticky;
  width: 100%;
  background-color: ${({theme}) => fromPalette(theme, 'primaryContrast')}d1;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  z-index: ${({theme}) => theme.z.header};
  top: 0px;
  padding-top: 20px;
`;

const TimelineHeader = ({profile}) => (
<SpacedAroundFlex>
  <span style={{flex: 1}}/>
  <ProfileDetailsLink profile={profile}/>
  <NewEventLink/>
</SpacedAroundFlex>
);

export default TimelineHeader
