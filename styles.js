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
    font-size: 1.5rem;
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
    --light-color: #89cdcb;
    --hover-color: #3f9291;
  }

  h2 {
size: 1rem;
color: var(--primary-color);
  }
  
  /**
* ----------------------------------------------
* accordion styles classes
* ----------------------------------------------
**/
.accordion {
  border: none;
  border-radius: 2rem
}

.accordion__item + .accordion__item {
  border-top: none;
}

.accordion__button {
  background-color: var(--light-color);
  color: var(--primary-color);
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: 1px solid var(--primary-color);
  border-radius: 2rem;
}

.accordion__button:hover {
  background-color: var(--hover-color);
}

.accordion__button:before {
  display: inline-block;
  content: "";
  height: 10px;
  width: 10px;
  margin-right: 12px;
  border-bottom: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(-45deg);
}

.accordion__button[aria-expanded="true"]::before,
.accordion__button[aria-selected="true"]::before {
  transform: rotate(45deg);
}

[hidden] {
  display: none;
}

.accordion__panel {
  padding: 20px;
  animation: fadein 0.35s ease-in;
  background-color: white;
  /* border: 2rem solid rgba((255, 0, 0, 0.5)); */
  border-radius: 2rem;
  font-size: 1rem;
}

/* -------------------------------------------------- */
/* ---------------- Animation part ------------------ */
/* -------------------------------------------------- */

@keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

  
`;
