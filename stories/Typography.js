import React from 'react';
import {muiTheme} from "storybook-addon-material-ui";
import { storiesOf } from '@storybook/react';
import BodyText from "../src/common/typography/BodyText";
import SubheadingText from "../src/common/typography/SubheadingText";
import theme from "../src/theme";
import TitleText from "../src/common/typography/TitleText";
import DisplayText from "../src/common/typography/DisplayText";

storiesOf('Typography', module)
.addDecorator(
  muiTheme([theme]),
)
.add('body text', () => [
  <DisplayText colour={"primary"}>This is DisplayText, used for page headers</DisplayText>,
  <TitleText colour={"primary"}>This is TitleText, used to title event list entries</TitleText>,
  <BodyText>This is BodyText, used for inputs, background messages, etc</BodyText>,
  <SubheadingText>This is SubheadingText, used as field headings</SubheadingText>
]);
