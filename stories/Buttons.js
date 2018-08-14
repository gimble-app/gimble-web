import React from 'react';
import {muiTheme} from "storybook-addon-material-ui";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddIcon from '@material-ui/icons/Add';
import theme from "../src/theme";
import FloatingActionButtonSmall from "../src/common/buttons/FloatingActionButtonSmall";
import FloatingActionButton from "../src/common/buttons/FloatingActionButton";
import BigProfileButton from "../src/common/buttons/BigButton";
import BigRedButton from "../src/common/buttons/BigRedButton";

storiesOf('Buttons', module)
.addDecorator(
  muiTheme([theme]),
)
.add('floating action buttons', () => [
  <FloatingActionButton onClick={action('clicked')}><AddIcon /></FloatingActionButton>,
  <FloatingActionButtonSmall onClick={action('clicked')}><AddIcon /></FloatingActionButtonSmall>
])
.add('profile button', () => [
  <BigProfileButton onClick={action('clicked')}>Placeholder</BigProfileButton>
])
.add('big red button', () => [
  <BigRedButton onClick={action('clicked')}>Placeholder</BigRedButton>,
  <BigRedButton disabled onClick={action('clicked')}>Placeholder</BigRedButton>,
]);
