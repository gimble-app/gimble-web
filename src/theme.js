import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f3e9e',
      light: '#6668d0',
      dark: '#00186f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dd2c00',
      light: '#ff6434',
      dark: '#a30000',
      contrastText: '#ffffff',
    },
    common: {
      grey: '#fafafa'
    },
  },
  spacing: {
    unit: 4
  }
});

export default theme;
