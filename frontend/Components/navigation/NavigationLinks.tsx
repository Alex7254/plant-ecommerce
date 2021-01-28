import styled from 'styled-components'

import NavigationLink from './NavigationLink';
import CartButton from './CartButton';
import CactusLogo from './Logo';

const StyledUl = styled.ul`
    list-style-type: none;
    /* background-color: darkblue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const StyledNav = styled.nav`
    /* background-color: #9ab1b1; */
    padding: 20px 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const cartButton = styled.a

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