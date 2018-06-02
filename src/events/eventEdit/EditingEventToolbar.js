import React from 'react';
import styled from "styled-components";
import Toolbar from '@material-ui/core/Toolbar';
import CancelButton from '../../common/CancelButton';
import SaveButton from './SaveButton';
import TitleText from '../../common/typography/TitleText';

const FlexedTitleText = styled(TitleText)`
  flex: 1;
`;


const EditingEventToolBar = ({ onSave }) => (
  <Toolbar>
    <CancelButton />
    <FlexedTitleText />
    <SaveButton onClick={onSave}/>
  </Toolbar>
);

export default EditingEventToolBar;
