import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {fromPalette} from "../theme";

const TimelineEventDescriptionText = withTheme()(styled(Typography)`
  font-size: 20px;
`);

export default ({ children, ...props}) =>
<TimelineEventDescriptionText
  variant="title"
  color="inherit"
  {...props}
>
  {children}
</TimelineEventDescriptionText>;
