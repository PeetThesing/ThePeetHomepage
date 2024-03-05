import { useState } from 'react';
import styled from 'styled-components';



const MouseFollowAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <Animation style={{ left: position.x, top: position.y }} />
    </Container>
  );
};

export default MouseFollowAnimation;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Animation = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: rgba(52, 152, 219, 0.5);
  border-radius: 50%;
  
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
`;