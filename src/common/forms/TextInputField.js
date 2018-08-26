import React from "react";
import FormControl from "./FormControl";
import Label from "./Label";
import Input from "./Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const TextInputField = ({
  error,
  focused,
  filled,
  required,
  disabled,
  label,
  helperText,
  value,
  ...props}) => (
  <FormControl
    error={error}
    disabled={disabled}
    required={required}
  >
    <Label shrink >{label}</Label>
    <Input value={value} {...props } />
    <FormHelperText
      filled={filled}
      focused={focused}
      error={error}
    >{helperText}</FormHelperText>
  </FormControl>
);

export default TextInputField;
