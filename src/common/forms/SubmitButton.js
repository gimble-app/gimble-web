import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import FloatingActionButtonSmall
from "../buttons/FloatingActionButtonSmall";

const SubmitButton = ({disabled}) =>
  <FloatingActionButtonSmall
    type="submit"
    disabled={disabled}
  >
    <CheckIcon />
  </FloatingActionButtonSmall>;

export default SubmitButton
