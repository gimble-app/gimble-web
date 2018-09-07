const theme ={
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
      lightGrey: '#DEDEDE',
      grey: '#7A7A7A',
      darkGrey: '#444444',
      black: '#000000',
    },
  },
  spacing: {
    unit: 8
  },
  z: {
    header: 200
  }
};

export const fromPalette = (theme, colour, defaultColour) => {
  const palette = theme.palette;
  switch(colour) {
    case 'primary': return palette.primary.main;
    case 'primaryLight': return palette.primary.light;
    case 'primaryDark': return palette.primary.dark;
    case 'primaryContrast': return palette.primary.contrastText;
    case 'grey': return palette.common.grey;
    case 'lightGrey': return palette.common.lightGrey;
    case 'darkGrey': return palette.common.darkGrey;
    case 'black': return palette.common.black;
    case 'secondary': return palette.secondary.main;
    case 'secondaryLight': return palette.secondary.light;
    case 'secondaryDark': return palette.secondary.dark;
    case 'secondaryContrast': return palette.secondary.contrastText;
    default: return defaultColour ? fromPalette(theme, defaultColour) : '';
  }
};

export default theme;
