import React from 'react';
import ControlledInput from "../common/ControlledInput";

const AddFriendForm = () => (
  <form>
    <ControlledInput
      id="email"
      label="Email"
      type="email"
      placeholder="add a friend by their email"
      autoFocus
    />
  </form>
);

export default AddFriendForm;


