import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --light-text-color: #fff;
    --dark-text-color: #2c2c2c;
  }

  body {
    font-family: 'Rock Salt', cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
