import styled from "styled-components";
import MaterialFormGroup from "@material-ui/core/FormGroup";

const FormGroup = styled(MaterialFormGroup)`
  width: 100%;
  margin: ${({theme}) => theme.spacing.unit * 2}px 0px;
`;

export default FormGroup;
