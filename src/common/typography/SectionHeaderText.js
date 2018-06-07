import React from "react";
import {withTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import {fromPalette} from "../../theme";

const HeaderText = withTheme()(styled(Typography)`
  color: ${({theme}) => fromPalette(theme, 'primary')};
`);

export default ({ children }) => (
  <HeaderText variant="headline" color="inherit">
    { children }
  </HeaderText>
);
