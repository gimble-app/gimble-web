import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  flex: 1;
`;

const TitleText = ({ children, ...props}) =>
<StyledTypography
  variant="title"
  color="inherit"
  {...props}
>
  {children}
</StyledTypography>;

export default TitleText;



