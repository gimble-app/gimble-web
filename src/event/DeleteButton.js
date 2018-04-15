import React from 'react';
import Button from 'material-ui/Button';
import { Link } from "react-router-dom";

const DeleteButton = ({ onClick }) =>
  <Link to="/">
    <Button onClick={onClick} color="inherit" aria-label="delete" variant="flat">
      Delete
    </Button>
  </Link>

export default DeleteButton;
