import React from 'react';
import ControlledInput from "../common/ControlledInput";
import Button from 'material-ui/Button';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
`;

const AddFriendForm = () => (
  <Form>
    <ControlledInput
      id="email"
      label="Email"
      type="email"
      placeholder="add a friend by their email"
      autoFocus
    />
    <Button>Invite</Button>
  </Form>
);

export default AddFriendForm;



