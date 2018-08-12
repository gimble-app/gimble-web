import React from 'react';
import {muiTheme} from "storybook-addon-material-ui";
import { storiesOf } from '@storybook/react';
import BodyText from "../src/common/typography/BodyText";
import SubheadingText from "../src/common/typography/SubheadingText";
import theme from "../src/theme";

storiesOf('Typography', module)
.addDecorator(
  muiTheme([theme]),
)
.add('body text', () => [
  <BodyText>This is BodyText, used for inputs, etc</BodyText>,
  <SubheadingText>This is SubheadingText, used for inputs, etc</SubheadingText>
]);
