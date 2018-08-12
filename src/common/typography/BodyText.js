import React from "react";
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";
import {fromPalette} from "../../theme";

const BodyText = withTheme()(styled.p`
  font-size: 16px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 24px;
  color: ${({theme}) => fromPalette(theme, 'black')};
`);

export default BodyText;


