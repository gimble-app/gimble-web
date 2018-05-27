import React from 'react';
import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const FixedButton = withTheme()(styled(Button)`
    position:fixed;
    bottom: ${({theme}) => theme.spacing.unit * 2}px;
    right: ${({theme}) => theme.spacing.unit * 2}px;
`);

const Fab = ({children, ...props}) => (
    <FixedButton
      variant="fab"
      color="secondary"
      {...props}
    >
      {children}
    </FixedButton>
);

export default Fab;

