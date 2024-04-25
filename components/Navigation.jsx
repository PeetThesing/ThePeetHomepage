import Link from "next/link";
import styled from "styled-components";
export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink
        href="/"
        aria-label="Home"
      >
      Home
      </StyledLink>
      <StyledLink
        href="/autorin"
        aria-label="Buch und Texte"
      >
        Buch & Texte
      </StyledLink>
      <StyledLink
        href="/wendo"
        aria-label="Wendo"
      >
        Wendo
      </StyledLink>
      <StyledLink
        href="/webdev"
        aria-label="Webdevelopment"
      >
        Webdevelopment
      </StyledLink>
    </StyledNav>
  );
}
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 3rem;
  background: var(--white);
  width: 100%;
  height: 4.5rem;
  text-decoration: none;
  font-size: 1rem;
  border-bottom: solid white 0.1rem;
  padding: 0.5rem;
  box-shadow: 0px 0px 15.8px 0px rgba(0, 0, 0, 0.25);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  &:hover {
    text-decoration: underline;
}

`;