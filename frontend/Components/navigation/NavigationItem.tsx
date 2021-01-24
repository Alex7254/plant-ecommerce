import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const StyledList = styled.li`
    cursor: pointer;
    background-color: green;
`;

const StyledLink = styled.a`
    background-color: pink;
    color: #666633;
    padding: 10px;
    margin: 0 10px;
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