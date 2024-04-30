import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const StyledTextsection = styled.section`
  margin-top: 7rem;
`;

export const StyledText = styled.div`
  font-size: 1rem;
  padding: 0 3rem;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  &:hover {
    text-decoration: underline;
  }
`;

export const SingleImageLeft = styled(Image)`
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1;
`;

export const SingleImageRight = styled(Image)`
  position: fixed;
  right: 0;
  top: 5rem;
  opacity: 0.4;
  z-index: -3;
`;

// Keyframes für die Animation definieren
export const slideDown = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 100px; /* Höhe des Textfelds, anpassen nach Bedarf */
  }
`;

// Stilisierte Komponente für das Textfeld mit Animation
export const TextContainer = styled.div`
  background: var(--light-color);
  border-radius: 25%;
  padding: 1rem;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease; /* Fallback für ältere Browser */
  animation: ${slideDown} 0.5s ease; /* Animation mit keyframes */
  animation-fill-mode: forwards; /* Halte den letzten Frame der Animation */
`;
