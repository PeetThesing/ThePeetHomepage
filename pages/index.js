import styled from 'styled-components';
import { useState } from 'react';

export default function HomePage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });}

  return (
     <BusinessCard onMouseMove={handleMouseMove}>
    <Animation style={{ left: position.x, top: position.y }}/>
      <h1>Peet Thesing</h1>
      <p>Autorin / Wendo-Trainerin / Webentwicklerin</p>
      <div class="stars"></div>
     </BusinessCard>  
  );
};



const BusinessCard = styled.div`
position: relative;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
height: 100vh;
width: 100vw;
justify-content: center;
`

const Animation = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  background-color: #012e38;
  /* border-radius: 50%; */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    opacity: 20%;
  opacity: 20%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
`