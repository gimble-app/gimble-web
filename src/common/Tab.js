import MaterialTab from "@material-ui/core/Tab";
import styled from "styled-components";
import {fromPalette} from "../theme/theme";

const Tab = styled(MaterialTab)`
  flex-grow: 1;
  max-width: inherit !important;
  
  && {
    > span {
    display: flex;
    flex-direction: row;
    color: ${({theme}) => fromPalette(theme, 'secondary')}
    }
  }
`;

export default Tab;
