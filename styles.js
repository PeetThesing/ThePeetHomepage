import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: var(--primary-color);
    margin-top: 5rem 0 0 0;
    background-color: var(--white);
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
    --primary-color: #012e38;
    --white: white;
    --light-color: #275863;
  }


`;

//Parkplatz
// background-image: 
// radial-gradient(circle, var(--primary-color) 25%, var(--light-color) 75%);