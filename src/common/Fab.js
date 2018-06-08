import React from 'react';
import Button from "@material-ui/core/Button";

const Fab = ({children, ...props}) => (
    <Button
      variant="fab"
      color="secondary"
      {...props}
    >
      {children}
    </Button>
);

export default Fab;

