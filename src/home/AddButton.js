import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import { InternalLink } from '../common/InternalLinks';
import Fade from 'material-ui/transitions/Fade';
import SecondaryFab from '../common/SecondaryFab';

const AddButton = () => (
  <Fade
    in
    style={{ transitionDelay: 1000 }}
  >
    <SecondaryFab aria-label="add">
      <InternalLink to="/event">
        <AddIcon />
      </InternalLink>
    </SecondaryFab>
  </Fade>
);

export default AddButton;
