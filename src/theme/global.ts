import { createGlobalStyle } from "styled-components";

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
    background: #f0f0f0;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #333;
    font-size: 16px;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
  }
`;
