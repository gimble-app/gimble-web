import {storiesOf} from '@storybook/react';
import React from "react";
import TextInputField from "../src/common/forms/TextInputField";
import Form from "../src/common/forms/Form";
import ImageCheckboxField from "../src/common/forms/ImageCheckboxField";
import Label from "../src/common/forms/Label";
import FormGroup from "../src/common/forms/FormGroup";
import profileImage from './placeholder-profile.jpg';
import FlexContainer from "../src/common/layout/FlexContainer";

storiesOf('Forms', module)
.add('text inputs', () => [
  <TextInputField
    required
    label="What is your name?"
    defaultValue="Captain Somebody"
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
    <FormGroup>
      <Label shrink >Who is coming?</Label>
      <FlexContainer>
        <ImageCheckboxField checked imageUrl={profileImage} label="Dan" />
        <ImageCheckboxField imageUrl={profileImage} label="Dan" />
      </FlexContainer>
    </FormGroup>
  </Form>
]);
