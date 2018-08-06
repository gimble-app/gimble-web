import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {InternalLink} from '../common/InternalLinks';
import Fab from "../common/Fab";

const NewEventLink = () => (
  <div style={{flex: 1, position: "relative"}}>
    <div style={{position: "absolute", bottom: "-12px", left: "12px"}}>

      <Fab aria-label="add event" mini>
        <InternalLink to="event">
          <AddIcon />
        </InternalLink>
      </Fab>
    </div>
  </div>
);

export default NewEventLink;
