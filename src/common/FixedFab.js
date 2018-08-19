import React from 'react';
import styled from "styled-components";
import Fab from "./Fab";

const FixedFab = styled(Fab)`
    position:fixed;
    bottom: ${({theme}) => theme.spacing.unit * 2}px;
    right: ${({theme}) => theme.spacing.unit * 2}px;
`;

export default FixedFab;

