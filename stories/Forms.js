import {storiesOf} from '@storybook/react';
import React from "react";
import TextInputField from "../src/common/forms/TextInputField";

storiesOf('Forms', module)
.add('text inputs', () => [
  <TextInputField
    required
    label="What is your name?"
  />,
  <TextInputField
    error
    label="What is your name?"
    helperText="Name can't be empty"
  />,
  <TextInputField
    disabled
    label="What is your name?"
  />
  ]);
