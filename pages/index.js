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
  width: 20rem;
  height: 20rem;
  background-color: rgba(52, 152, 219, 0.5);
  border-radius: 50%;
  
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
`