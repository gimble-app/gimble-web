import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';

const EditingEventToolBar = ({ isNew, onDelete, onSave }) => (
  <Toolbar>
    <CancelButton />
    { !isNew && <DeleteButton onClick={onDelete} /> }
    <SaveButton onClick={onSave}/>
  </Toolbar>
);

export default EditingEventToolBar;
