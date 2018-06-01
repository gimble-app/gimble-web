import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { InternalLink } from '../../../common/InternalLinks';
import ContrastTextIconButton from "./ContrastTextIconButton";

const DeleteButton = ({ onClick }) => (
  <InternalLink to="/">
    <ContrastTextIconButton color="inherit" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </ContrastTextIconButton>
  </InternalLink>
);

export default DeleteButton;
