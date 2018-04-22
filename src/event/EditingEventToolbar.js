import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import ToolbarTitleText from '../common/ToolbarTitleText';

const EditingEventToolBar = ({ isNew, onDelete, onSave }) => (
  <Toolbar>
    <CancelButton />
    <ToolbarTitleText></ToolbarTitleText>
    { !isNew && <DeleteButton onClick={onDelete} /> }
    <SaveButton onClick={onSave}/>
  </Toolbar>
);

export default EditingEventToolBar;
