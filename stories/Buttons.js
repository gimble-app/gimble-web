import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import AddIcon from '@material-ui/icons/Add';
import FloatingActionButtonSmall
  from "../src/common/buttons/FloatingActionButtonSmall";
import FloatingActionButton from "../src/common/buttons/FloatingActionButton";
import BigRedButton from "../src/common/buttons/BigRedButton";
import profileImage from './placeholder-profile.jpg';
import BigAvatar from "../src/common/avatars/BigAvatar";
import BigButton from "../src/common/buttons/BigButton";

storiesOf('Buttons', module)
.add('floating action buttons', () => [
  <FloatingActionButton onClick={action('clicked')}><AddIcon /></FloatingActionButton>,
  <FloatingActionButtonSmall onClick={action('clicked')}><AddIcon /></FloatingActionButtonSmall>
])
.add('big button', () => [
  <BigButton onClick={action('clicked')}>
    <BigAvatar src={profileImage}/>
  </BigButton>
])
.add('big red button', () => [
  <BigRedButton onClick={action('clicked')}>Placeholder</BigRedButton>,
  <BigRedButton disabled onClick={action('clicked')}>Placeholder</BigRedButton>,
]);
