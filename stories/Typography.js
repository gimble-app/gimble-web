import React from 'react';
import {muiTheme} from "storybook-addon-material-ui";
import { storiesOf } from '@storybook/react';
import theme, {fromPalette} from "../src/theme";
import BodyText from "../src/common/typography/BodyText";
import FieldHeadingText from "../src/common/typography/FieldHeadingText";
import TitleText from "../src/common/typography/TitleText";
import DisplayText from "../src/common/typography/DisplayText";
import SubheadingText from "../src/common/typography/SubheadingText";
import LabelText from "../src/common/typography/LabelText";

const primary = fromPalette(theme, "primary");

storiesOf('Typography', module)
.addDecorator(
  muiTheme([theme]),
)
.add('text', () => [
  <div style={{backgroundColor: primary}}><DisplayText>DisplayText - for page headers</DisplayText></div>,
  <div style={{backgroundColor: primary}}><TitleText>TitleText - to title event list entries</TitleText></div>,
  <SubheadingText>SubheadingText - highlights smaller sections on the page</SubheadingText>,
  <BodyText>BodyText - inputs, background messages, etc</BodyText>,
  <div style={{backgroundColor: primary}}><LabelText>LabelText - discrete pieces of info such as data, profile names and buttons</LabelText></div>,
  <FieldHeadingText>FieldHeadingText - for field headings</FieldHeadingText>,
]);
