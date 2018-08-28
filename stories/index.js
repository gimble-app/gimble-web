import { addDecorator } from '@storybook/react';
import theme from "../src/theme/theme";
import React, {Fragment} from "react";
import {ThemeProvider} from "styled-components";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Fragment>{story()}</Fragment>
  </ThemeProvider>
));

require('./Timelines');
require('./Buttons');
require('./Forms');
require('./Typography');
require('./Screens');

