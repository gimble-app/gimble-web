import MaterialTab from "@material-ui/core/Tab";
import styled from "styled-components";
import {fromPalette} from "../theme/theme";

const Tab = styled(MaterialTab)`
  && {
    > span {
    display: flex;
    flex-direction: row;
    color: ${({theme}) => fromPalette(theme, 'secondary')}
    }
  }
`;

export default Tab;
