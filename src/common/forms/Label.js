import styled from "styled-components";
import {fromPalette} from "../../theme/theme";
import InputLabel from "@material-ui/core/InputLabel";

const Label = styled(InputLabel)`
  color: ${({theme}) => fromPalette(theme, 'grey')};
`;

export default Label;


