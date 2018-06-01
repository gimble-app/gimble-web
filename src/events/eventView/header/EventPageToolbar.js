import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CancelButton from "../CancelButton";
import TitleText from "../../../common/typography/TitleText";
import EventActions from "./EventActions";
import ParticipantsSummary from "./ParticipantsSummary";

export const EventPageToolbar = ({event}) => (
  <Toolbar>
    <CancelButton />
    <TitleText/>
    <ParticipantsSummary participants={ event.participants } />
    <EventActions id={event.id} />
  </Toolbar>
);

export default EventPageToolbar;
