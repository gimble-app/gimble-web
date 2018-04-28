import React from 'react';
import Fab from './internal/Fab.js';

const SecondaryFab = ({children, ...props}) => (
    <Fab
      variant="fab"
      color="secondary"
      {...props}
    >
      {children}
    </Fab>
);

export default SecondaryFab;
