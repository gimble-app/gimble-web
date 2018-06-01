import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";

export default withTheme()(styled.div`
  padding-left:${({theme}) => theme.spacing.unit * 2}px;
`);
