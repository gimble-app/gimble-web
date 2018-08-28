import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {InternalLink} from '../common/InternalLinks';
import FloatingActionButtonSmall
  from "../common/buttons/FloatingActionButtonSmall";

const NewEventLink = () => (
  <div style={{flex: 1, position: "relative"}}>
    <div style={{position: "absolute", bottom: "-12px", left: "12px"}}>

      <FloatingActionButtonSmall aria-label="add event" mini>
        <InternalLink to="event">
          <AddIcon />
        </InternalLink>
      </FloatingActionButtonSmall>
    </div>
  </div>
);

export default NewEventLink;
