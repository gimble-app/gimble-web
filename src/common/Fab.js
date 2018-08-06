import React from 'react';
import Button from "@material-ui/core/Button";

const Fab = ({children, ...props}) => (
    <Button
      variant="fab"
      color="primary"
      {...props}
    >
      {children}
    </Button>
);

export default Fab;

