import styled from "styled-components";

const CardContainer = styled.div`
  height: 22rem;
  width: 18rem;
  position: relative;
`;

const ProductImage = styled.img`
  max-height: 14.2rem;
`;

const ProductDetails = styled.div`
  height: 11rem;
  width: 100%;
  position absolute;
  top: 11rem;
  z-index: -1;
  background-color: var(--beige);
  border-radius: 1rem;
`;

const ProductCard = (props) => {
  return (
    <CardContainer>
      <ProductImage src={props.imgUrl} alt={props.imgAlt} />
      <ProductDetails />
    </CardContainer>
  );
};

export default ProductCard;
