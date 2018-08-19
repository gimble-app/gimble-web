import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import {fromPalette} from "../../theme/theme";

export default styled(Avatar)`
  width: 32px !important;
  height: 32px !important;
  border: 1px solid ${({theme}) => fromPalette(theme, 'secondaryContrast')};
  box-shadow: 0px 1px 1px 0px;
  color: #444444 !important;  
`;
