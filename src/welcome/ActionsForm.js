import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";

export default withTheme()(styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column; 
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);
