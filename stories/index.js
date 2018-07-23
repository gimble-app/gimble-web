import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AddIcon from '@material-ui/icons/Add';

import Fab from "../src/common/Fab";

storiesOf('Buttons', module)
  .add('different types', () => [
    <Fab onClick={action('clicked')}><AddIcon /></Fab>,
    <Fab onClick={action('clicked')}><AddIcon /></Fab>
  ]);
