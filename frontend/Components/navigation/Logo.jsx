import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const svgSize = 27;
const StyledLink = styled.a`
    cursor: pointer;
    padding: 5px;
    /* background-color: aqua; */
    display: grid;
    place-items:center;
`;
const Logo = () => {
  return (
    <Link href="/">
      <StyledLink>
        <Image src="/svg/cactus-logo.svg" alt="me" height={svgSize} width={svgSize} />
      </StyledLink>
    </Link>
  )
}

export default Logo
