import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: var(--beige);
  height: 22rem;
  width: 15.813rem;
  border-radius: 1rem;
  /* position: relative; */
`

const ProductImage = styled.img `
  height: 13rem;
  width: 100%;
  /* position absolute; */
  /* top: -7.3rem; */
`

const ProductCard = (props) => {
  return (
    <CardContainer>
      <ProductImage src={props.imgUrl} alt={props.imgAlt}/>
    </CardContainer>
  )
}

export default ProductCard
