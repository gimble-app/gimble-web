import styled from "styled-components";
import CentredFlex from "./layout/CentredFlex";

const CentredPanel = styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`;

export default CentredPanel;
