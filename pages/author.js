import { useState } from 'react';
import { Animation } from '@/components/MouseFollowStar';
import { BusinessCard } from '@/components/BuisnessCard';
import styled from 'styled-components';
import Image from 'next/image';


export default function Author() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });}

  return (
     <BusinessCard onMouseMove={handleMouseMove}>
    <Animation style={{ left: position.x, top: position.y }}/>
    <h1>Feministische Psychiatriekritik</h1>
  <Image
  src="/assets/BookCover.jpg"
  width={500}
  height={500}
  alt="Bild vom Buchcover, Schrift auf Hintergrund"
  aria-label='hidden'
  />
      <div>
<p>Erscheinungsdatum: 3. Auflage Januar 2024 (März 2017)</p>
<p>unrast transparent – geschlechterdschungel Band 9</p>
<p>© UNRAST-Verlag, Münster ISBN 978-3-89771-140-2</p><p>info@unrast-verlag.de | www.unrast-verlag.de</p>
</div>
     </BusinessCard>  
  );
};

const StyledInfos = styled.div`
  display: flex;

`