import React from 'react';
import Typography from '@material-ui/core/Typography';

const TitleText = ({ children, ...props}) =>
<Typography
  variant="title"
  color="inherit"
  {...props}
>
  {children}
</Typography>;

export default TitleText;



