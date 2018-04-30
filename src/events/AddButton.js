import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import { withTheme } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import SecondaryFab from '../common/SecondaryFab';
import { InternalLink } from '../common/InternalLinks';

const AddButton = ({theme}) => (
  <Fade
    in
    style={{ transitionDelay: theme.transitions.duration.standard }}
  >
    <SecondaryFab aria-label="add">
      <InternalLink to="/event">
        <AddIcon />
      </InternalLink>
    </SecondaryFab>
  </Fade>
);

export default withTheme()(AddButton);
