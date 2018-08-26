import React from "react";

const bridgeReduxFormField = (
  WrappedComponent,
  { meta: { touched, error, active }, input, ...rest }
  ) => (
  <WrappedComponent
    helperText={error}
    error={touched && !!error}
    focused={active}
    {...input}
    value={input.value.toString()}
    {...rest}
  />
);

export default bridgeReduxFormField;
