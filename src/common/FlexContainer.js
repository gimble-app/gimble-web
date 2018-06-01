import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";

const FlexContainer = withTheme()(styled.div`
  display: flex;
  flex-wrap: wrap;
`);


export default FlexContainer;
