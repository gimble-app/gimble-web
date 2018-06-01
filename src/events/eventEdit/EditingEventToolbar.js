import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CancelButton from '../../common/CancelButton';
import SaveButton from './SaveButton';
import TitleText from '../../common/typography/TitleText';

const EditingEventToolBar = ({ onSave }) => (
  <Toolbar>
    <CancelButton />
    <TitleText />
    <SaveButton onClick={onSave}/>
  </Toolbar>
);

export default EditingEventToolBar;
