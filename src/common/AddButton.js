import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import { withTheme } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import SecondaryFab from './SecondaryFab';
import { InternalLink } from './InternalLinks';

const AddButton = ({theme, type}) => (
  <Fade
    in
    style={{ transitionDelay: theme.transitions.duration.standard }}
  >
    <SecondaryFab aria-label="add">
      <InternalLink to={type}>
        <AddIcon />
      </InternalLink>
    </SecondaryFab>
  </Fade>
);

export default withTheme()(AddButton);
