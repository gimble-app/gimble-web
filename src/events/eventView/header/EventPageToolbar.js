import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import CancelButton from "../CancelButton";
import TitleText from "../../../common/typography/TitleText";
import EventActions from "./EventActions";
import ParticipantsSummary from "./ParticipantsSummary";

const FlexedTitleText = styled(TitleText)`
  flex: 1;
`;

export const EventPageToolbar = ({event}) => (
  <Toolbar>
    <CancelButton />
    <FlexedTitleText/>
    <ParticipantsSummary participants={ event.participants } />
    <EventActions id={event.id} />
  </Toolbar>
);

export default EventPageToolbar;


