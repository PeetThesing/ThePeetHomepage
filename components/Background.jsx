import styled from "styled-components"
import Image from "next/image"

export default function Background(){
    return (
<StyledBackground>
 <StyledImageOne
src="/images/pcandfist.png"
width={228}
height={360}
alt="LAPTOP"
sizes='20vw'
/>
      <StyledImageTwo
  src="/images/maus.png"
  width={167}
  height={474}
  alt="MAUS"
  />
     </StyledBackground>

    )
}


const StyledImageOne = styled(Image)`
position: fixed;
bottom: 0;
left: 0;
opacity:0.1;

`

const StyledImageTwo = styled(Image)`
position: fixed;
right: 0;
top:5rem;
opacity:0.1;
z-index:-2;
`

const StyledBackground = styled.section`
width: 100%;

`