import { useState } from 'react';
import { Animation } from '@/components/MouseFollowStar';
import { BusinessCard } from '@/components/BuisnessCard';

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