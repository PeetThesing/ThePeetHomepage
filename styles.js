import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: var(--primary-color);
    background-color: var(--white);
    font-size: 2rem;
    position: relative;
display: flex;
flex-flow: column wrap;
align-items: center;
text-align: center;
height: 100vh;
width: 100vw;
padding: 1rem
  }

  :root {
    --primary-color: #1d1a3d;
    --white: white;
    --light-color: #9c93fa;
  }

  h2 {
size: 1rem;
color: var(--primary-color);
  }
`;