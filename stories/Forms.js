import {storiesOf} from '@storybook/react';
import React from "react";
import TextInputField from "../src/common/forms/TextInputField";
import Form from "../src/common/forms/Form";
import BuddySelectionEntry from "../src/common/forms/ImageSelectEntry";
import profileImage from './placeholder-profile.jpg';
import Label from "../src/common/forms/Label";
import FormGroup from "@material-ui/core/FormGroup";

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
    <FormGroup style={{width: "100%"}}>
      <Label shrink >Who is coming?</Label>
      <div style={{
        marginTop: "8px",
        display: "flex",
        justifyContent: "space-evenly"
      }}>
        <BuddySelectionEntry checked imageUrl={profileImage} label="Dan" />
        <BuddySelectionEntry imageUrl={profileImage} label="Dan" />
      </div>
    </FormGroup>
  </Form>
]);
