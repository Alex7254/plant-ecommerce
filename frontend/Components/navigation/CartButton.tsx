import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const svgSize = 25;

const StyledLink = styled.a`
    cursor: pointer;
    padding: 5px;
    /* background-color: aqua; */
    display: grid;
    place-items:center;
`;

const CartButton = () => {
  return (
    <Link href="/">
      <StyledLink>
        <Image src="/svg/cart-icon.svg" alt="me" height={svgSize} width={svgSize} />
      </StyledLink>
    </Link>
  )
}

export default CartButton
