import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  flex: 1;
`;

const CaptionText = ({ children, ...props}) =>
<StyledTypography
  variant="caption"
  color="inherit"
  {...props}
>
  {children}
</StyledTypography>;

export default CaptionText;



