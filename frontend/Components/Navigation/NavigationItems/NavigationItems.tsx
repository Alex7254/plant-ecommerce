import React from 'react';

import NavigationItem from './navigationItem/NavigationItem';
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: darkblue;
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