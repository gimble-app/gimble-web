import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

const HeaderText = styled(Typography)`
  color: ${({theme}) => fromPalette(theme, 'primary')};
`;

export default ({ children }) => (
  <HeaderText variant="headline" color="inherit">
    { children }
  </HeaderText>
);
