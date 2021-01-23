import React from 'react';

import NavigationItem from './navigationItem/NavigationItem';
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    background-color: darkblue;
    @media (min-width: 500px) {
        width:95%;
        flex-flow: row;
        justify-content: flex-end;
    }
`;

const navigationItems = () => (
    <StyledUl>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/experience">Experience</NavigationItem>
    </StyledUl>
);

export default navigationItems;