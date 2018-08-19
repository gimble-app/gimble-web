import styled from "styled-components";
import {fromPalette} from "../../theme/theme";
import BigAvatar from "./BigAvatar";

const BorderedBigAvatar = styled(BigAvatar)`
  box-shadow: 0 0 0px 4px ${({theme}) => fromPalette(theme, 'primary')};
`;

export default BorderedBigAvatar;
