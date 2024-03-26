import styled from "styled-components"
export const Animation = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  background-color: red;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    opacity: 20%;
  opacity: 30%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
`