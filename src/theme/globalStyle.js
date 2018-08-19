import { injectGlobal } from 'styled-components';
import theme, {fromPalette} from "./theme";
import 'typeface-roboto';

injectGlobal`

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    background-color: ${fromPalette(theme, 'primaryContrast')};
  }
  
  figure {
    margin: inherit;
  }
  
  a {
    display: inherit;
  }
`;
