import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const StyledTypography = styled(Typography)`
  flex: 1;
`;

export const ToolbarTitleText = ({ children, ...props}) =>
<StyledTypography
  variant="title"
  color="inherit"
  {...props}
>
  {children}
</StyledTypography>

export default ToolbarTitleText;



