import React from 'react';
import Button from "@material-ui/core/Button";

const FloatingActionButtonSmall = ({children, ...props}) => (
    <Button
      variant="fab"
      color="primary"
      mini
      {...props}
    >
      {children}
    </Button>
);

FloatingActionButtonSmall.displayName = "FloatingActionButtonSmall";

export default FloatingActionButtonSmall;
