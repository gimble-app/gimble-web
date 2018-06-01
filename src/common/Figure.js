import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";

export default withTheme()(styled.figure`
  margin:${({theme}) => theme.spacing.unit}px;
  width: 40px;
  flex-wrap: wrap;
`);

