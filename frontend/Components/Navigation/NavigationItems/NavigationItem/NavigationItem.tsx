import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const StyledList = styled.li`
    margin: 10px 0;
`;

const StyledLink = styled.a`
    ${StyledList} & {
            color: #666633;
            text-decoration: none;
            width: 100%;
            box-sizing: border-box;
            display: block;
    }
    ${StyledList} &:hover,
    ${StyledList} &:active,
    ${StyledList} &.active {
        color: #40A4C8;
    }

    @media (min-width: 500px) {
        
        ${StyledList} &{
            color: black;
            height: 100%;
            padding: 40px 50px;
            border-bottom: 4px solid transparent;
        }
        
        ${StyledList} &:hover,
        ${StyledList} &:active,
        ${StyledList} &.active {
            background-color: transparent;
            border-bottom: 1px solid black;
            color: black;
        }

    }
`;

const navigationItem = (props) => (
    <StyledList>
        <Link href={props.link}>
            <StyledLink>
                {props.children}
            </StyledLink>
        </Link>
    </StyledList>
)

export default navigationItem;