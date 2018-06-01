import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";

export default withTheme()(styled.figcaption`
  text-align: center;
  margin-top:${({theme}) => theme.spacing.unit / 2 }px;
`);
