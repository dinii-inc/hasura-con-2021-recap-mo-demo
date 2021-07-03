import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background: #ffffff;
  }
`;
