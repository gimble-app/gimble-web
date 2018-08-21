import {storiesOf} from '@storybook/react';
import React from "react";
import TextInputField from "../src/common/forms/TextInputField";
import Form from "../src/common/forms/Form";
import BuddySelectionEntry from "../src/common/forms/ImageSelectEntry";
import profileImage from './placeholder-profile.jpg';

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
    <BuddySelectionEntry
      imageUrl={profileImage}
      label="Dan"
    />
  </Form>
]);
