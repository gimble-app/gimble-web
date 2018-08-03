import { createMuiTheme } from '@material-ui/core/styles';

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
      grey: '#fafafa',
      darkGrey: '#444444',
    },
  },
  spacing: {
    unit: 8
  }
});

export const fromPalette = ({palette}, type) => {
  switch(type) {
    case 'primary': return palette.primary.main;
    case 'primaryLight': return palette.primary.light;
    case 'primaryDark': return palette.primary.dark;
    case 'primaryContrast': return palette.primary.contrastText;
    case 'darkGrey': return palette.common.darkGrey;
    case 'grey': return palette.common.grey;
    case 'secondary': return palette.secondary.main;
    case 'secondaryLight': return palette.secondary.light;
    case 'secondaryContrast': return palette.secondary.contrastText;
    default: return;
  }
};

export default theme;
