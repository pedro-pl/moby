import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body.lock-scroll {
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background: ${theme.background};

    font-family: "Inter", sans-serif;
  }
`;
