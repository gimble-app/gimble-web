import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import { withTheme } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import { InternalLink } from '../common/InternalLinks';
import Fab from "../common/Fab";

const AddButton = ({theme, type}) => (
  <Fade in style={{ transitionDelay: theme.transitions.duration.standard }}>
    <Fab aria-label="add">
      <InternalLink to={type}>
        <AddIcon />
      </InternalLink>
    </Fab>
  </Fade>
);

export default withTheme()(AddButton);
