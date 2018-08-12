import styled from "styled-components";
import {withTheme} from "@material-ui/core/styles";
import {fromPalette} from "../../theme";
import BigAvatar from "./BigAvatar";

const BorderedBigAvatar = withTheme()(styled(BigAvatar)`
  box-shadow: 0 0 0px 4px ${({theme}) => fromPalette(theme, 'primary')};
`);

export default BorderedBigAvatar;
