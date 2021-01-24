import React from 'react';

import NavigationLink from './NavigationLink';
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style-type: none;
    /* background-color: darkblue; */
`;

const StyledNav = styled.nav`
    /* background-color: #9ab1b1; */
    padding: 15px;
`;

const cartButton = styled.a

const navigationItems = () => (
    <StyledNav>
        <StyledUl>
            <NavigationLink link="/">Home</NavigationLink>
            <NavigationLink link="/projects">Projects</NavigationLink>
            <NavigationLink link="/about">About</NavigationLink>
            <NavigationLink link="/experience">Experience</NavigationLink>
        </StyledUl>
    </StyledNav>
);

export default navigationItems;