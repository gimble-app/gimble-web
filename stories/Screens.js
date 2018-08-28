import React from "react";
import {storiesOf} from "@storybook/react";
import CheckIcon from '@material-ui/icons/Check';
import CancelButton from "../src/common/buttons/CancelButton";
import Form from "../src/common/forms/Form";
import Page from "../src/common/Page";
import TextInputField from "../src/common/forms/TextInputField";
import FloatingActionButtonSmall
  from "../src/common/buttons/FloatingActionButtonSmall";

storiesOf('Screens', module)
.add('new screen', () => [
  <Page>
    <CancelButton />
    <Form>
      <TextInputField label="Name"/>
      <FloatingActionButtonSmall><CheckIcon /></FloatingActionButtonSmall>
    </Form>
  </Page>
])
.add('entry screen', () => [
  <Page>
    <CancelButton />

  </Page>
])
;
