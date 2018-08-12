import styled from "styled-components";
import {withTheme} from "@material-ui/core";
import CentredFlex from "./layout/CentredFlex";

const CentredPanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

export default CentredPanel;
