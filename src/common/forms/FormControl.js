import styled from "styled-components";
import MaterialFormControl from "@material-ui/core/FormControl";

const FormControl = styled(MaterialFormControl)`
  width: 100%;
  margin: ${({theme}) => theme.spacing.unit}px 0px;
`;

export default FormControl;
