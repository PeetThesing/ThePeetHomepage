import styled from "styled-components";
import Image from "next/image";

export const StyledTextsection = styled.section`
margin-top: 7rem`;

export const StyledText = styled.div`
font-size: 1rem;
padding:0 3rem;`;

export const StyledLink = styled.a`
text-decoration: none;
  color: var(--primary-color);
  &:hover {
    text-decoration: underline;
}`;

export const SingleImageLeft = styled(Image)`
position: fixed;
bottom: 0;
left: 0;
opacity:0.4;`

export const SingleImageRight = styled(Image)`
position: fixed;
right: 0;
top:5rem;
opacity:0.4;
z-index:-3;`

