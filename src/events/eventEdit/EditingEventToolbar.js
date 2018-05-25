import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import CancelButton from '../../common/CancelButton';
import SaveButton from './SaveButton';
import ToolbarTitleText from '../../common/ToolbarTitleText';

const EditingEventToolBar = ({ onSave }) => (
  <Toolbar>
    <CancelButton />
    <ToolbarTitleText />
    <SaveButton onClick={onSave}/>
  </Toolbar>
);

export default EditingEventToolBar;
