import styled from "styled-components";

import NavigationLink from "./NavigationLink";
import CartButton from "./CartButton";
import CactusLogo from "./Logo";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledNav = styled.nav`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  padding:1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const cartButton = styled.a;

const navigationItems = () => (
  <StyledNav>
    <CactusLogo />
    <StyledUl>
      <NavigationLink link="/">Home</NavigationLink>
      <NavigationLink link="/projects">Projects</NavigationLink>
      <NavigationLink link="/about">About</NavigationLink>
      <NavigationLink link="/experience">Experience</NavigationLink>
      <CartButton />
    </StyledUl>
  </StyledNav>
);

export default navigationItems;
