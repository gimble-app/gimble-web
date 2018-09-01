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
import BorderedBigAvatar from "../src/common/avatars/BorderedBigAvatar";
import Avatar from "../src/common/avatars/Avatar";

storiesOf('Avatars', module)
.add('Avatar', () => <Avatar src={profileImage}/>)
.add('BigAvatar', () => <BigAvatar src={profileImage}/>)
.add('BorderedBigAvatar', () => [
  <BorderedBigAvatar src={profileImage}/>,
])
.add('BigButton with BigAvatar', () => [
  <BigButton onClick={action('clicked')}>
    <BigAvatar src={profileImage}/>
  </BigButton>
]);
