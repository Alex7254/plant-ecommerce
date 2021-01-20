import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styled from 'styled-components'

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;

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