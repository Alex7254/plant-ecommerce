import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const StyledListItem = styled.li`
    margin: 0 10px;
    display: inline-block;
    padding: 0 5px;
    /* background-color: aliceblue; */
`;

export const StyledLink = styled.a`
    cursor: pointer;
    padding: 0 5px;
    color: #666633;
`;

const navigationItem = (props) => (
    <StyledListItem>
        <Link href={props.link}>
            <StyledLink>
                {props.children}
            </StyledLink>
        </Link>
    </StyledListItem>
)

export default navigationItem;