import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CancelButton from "./CancelButton";
import TitleText from "../../common/typography/TitleText";
import EventActions from "./EventActions";

export const EventPageToolbar = ({id}) => (
  <Toolbar>
    <CancelButton />
    <TitleText/>
    <EventActions id={id} />
  </Toolbar>
);

export default EventPageToolbar;
