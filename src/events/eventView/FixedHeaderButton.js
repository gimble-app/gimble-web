import React from 'react';
import styled from "styled-components";
import {withTheme} from "material-ui/styles";
import Button from "material-ui/Button";
import {HEADER_HEIGHT_PX} from "./Header";

const BUTTON_HEIGHT_OFFSET_PX = 14;
const FixedButton = withTheme()(styled(Button)`
    position:fixed;
    top: ${HEADER_HEIGHT_PX - BUTTON_HEIGHT_OFFSET_PX}px;
    right: ${({theme}) => theme.spacing.unit * 2}px;
`);

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

