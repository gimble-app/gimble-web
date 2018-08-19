import { injectGlobal } from 'styled-components';
import 'typeface-roboto';

injectGlobal`

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
  
  figure {
    margin: inherit;
  }
  
  a {
    display: inherit;
  }
`;
