import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export default withTheme()(styled(Avatar)`
  border: 2px solid #ffffff;
  width: 80px;
  height: 80px;
`);
