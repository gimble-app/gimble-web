import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const BUTTON_HEIGHT_OFFSET_PX = 14;
const FixedButton = styled(Button)`
    position:fixed;
    top: ${140 - BUTTON_HEIGHT_OFFSET_PX}px;
    right: ${({theme}) => theme.spacing.unit * 2}px;
`;

const FixedHeaderButton = ({children, ...props}) => (
    <FixedButton
      variant="fab"
      color="secondary"
      {...props}
    >
      {children}
    </FixedButton>
);

export default FixedHeaderButton;

