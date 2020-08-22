import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${colors.white};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px;
    line-height: 1.5;
    color: ${colors.fontColor};
    font-family: Raleway, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
