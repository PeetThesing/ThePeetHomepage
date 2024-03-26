import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-image: 
    radial-gradient(circle, var(--primary-color) 25%, var(--light-color) 75%);
    color: white;
  }

  :root {
    --primary-color: #012e38;
    --white: white;
    --light-color: #275863;
  }


`;

