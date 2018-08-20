import {storiesOf} from '@storybook/react';
import React from "react";
import TextInputField from "../src/common/forms/TextInputField";
import Form from "../src/common/forms/Form";
import ProfileSelector from "../src/common/forms/ProfileSelector";

storiesOf('Forms', module)
.add('text inputs', () => [
  <TextInputField
    required
    label="What is your name?"
    value="Captain Somebody"
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
  ])
.add('forms', () => [
  <Form>
    <TextInputField
      required
      label="What is your name?"
      value="Captain Somebody"
    />
    <ProfileSelector/>
  </Form>
]);
