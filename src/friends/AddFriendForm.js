import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ControlledInput from "../common/ControlledInput";
import { invite } from './actions';

const Form = styled.form`
  display: flex;
`;

export const AddFriendForm = ({invite}) => (
  <Form onSubmit={e => {
    invite(e.target.email.value);
    e.preventDefault();
  }}>
    <ControlledInput
      id="email"
      label="Email"
      type="email"
      name="email"
      placeholder="add a friend by their email"
      autoFocus
    />
    <Button type="submit">Invite</Button>
  </Form>
);

const mapDispatchToProps = {
  invite
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(AddFriendForm)
