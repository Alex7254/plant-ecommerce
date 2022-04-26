import styled from "styled-components";

import NavigationLink from "./NavigationLink";
import CartButton from "./CartButton";
import CactusLogo from "./Logo";

const StyledNav = styled.nav`
  background-color: var(--beige);
  margin: 0 auto;
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
`;

const StyledUl = styled.ul`
  max-width: 90rem;
  padding: 0.5rem 4rem;
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const navigationItems = () => (
  <StyledNav>
    <StyledUl>
      <CactusLogo />
      <div>
        <NavigationLink link="/">Home</NavigationLink>
        <NavigationLink link="/projects">Projects</NavigationLink>
        <NavigationLink link="/about">About</NavigationLink>
        <NavigationLink link="/experience">Experience</NavigationLink>
        <CartButton />
      </div>
    </StyledUl>
  </StyledNav>
);

export default navigationItems;
