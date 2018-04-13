import React from 'react';
import Button from 'material-ui/Button';
import { Link } from "react-router-dom";

const SaveButton = ({ onClick }) =>
  <Link to="/">
    <Button onClick={onClick} color="inherit" aria-label="save" variant="flat">
      Save
    </Button>
  </Link>

export default SaveButton;
