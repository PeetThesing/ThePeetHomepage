// import { useState } from 'react';
import  BusinessCard from '@/components/BuisnessCard';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import styled from 'styled-components';


export default function HomePage() {
    // const [position, setPosition] = useState({ x: 0, y: 0 });
  
    // const handleMouseMove = (event) => {
    //   setPosition({ x: event.clientX, y: event.clientY });}

  return (

      <> 
        <Navigation/>
       <h1>Peet Thesing</h1>
      <p>Autorin / Wendo-Trainerin / Webentwicklerin</p>
     <StyledSection>
 <StyledImageOne
src="/images/pcandfist.png"
width={228}
height={360}
alt="LAPTOP"
/>

      <StyledImageTwo
  src="/images/maus.png"
  width={334}
  height={948}
  alt="MAUS"
  />
     </StyledSection>
      </> 
  );
};


const StyledImageOne = styled(Image)`
position: fixed;
bottom: 0;
left: 0;
`

const StyledImageTwo = styled(Image)`
position: fixed;
bottom: 0;
right: 0;
`

const StyledSection = styled.section`
width: 100%;
justify-content: space-between;

`