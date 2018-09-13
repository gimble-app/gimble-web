import { addDecorator } from '@storybook/react';
import theme from "../src/theme/theme";
import React, {Fragment} from "react";
import {ThemeProvider} from "styled-components";
import '../src/theme/globalStyle';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Fragment>{story()}</Fragment>
  </ThemeProvider>
));

require('./Timelines');
require('./Profiles');
require('./Buttons');
require('./Forms');
require('./Typography');
require('./Tabs');
require('./Screens');
require('./Collaboration');
