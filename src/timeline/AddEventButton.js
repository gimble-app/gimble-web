import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {InternalLink} from '../common/InternalLinks';
import Fab from "../common/Fab";

const AddEventButton = () => (
  <Fab aria-label="add event" mini>
    <InternalLink to="event">
      <AddIcon />
    </InternalLink>
  </Fab>
);

export default AddEventButton;
