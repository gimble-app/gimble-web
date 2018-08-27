import React from 'react';
import Button from "@material-ui/core/Button";

const FloatingActionButton = ({children, ...props}) => (
    <Button
      variant="fab"
      color="primary"
      {...props}
    >
      {children}
    </Button>
);

FloatingActionButton.displayName = "FloatingActionButton";

export default FloatingActionButton;
