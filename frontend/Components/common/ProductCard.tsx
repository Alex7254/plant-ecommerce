import styled from "styled-components";

const CardContainer = styled.div`
  height: 21.5rem;
  width: 18rem;
  position: relative;
`;

const ProductImage = styled.img`
  max-height: 13.5rem;
  display: block;
  margin: 0 auto;
`;

const ProductDetails = styled.div`
  height: 13rem;
  width: 100%;
  position: absolute;
  top: 8.5rem;
  z-index: -1;
  background-color: var(--beige);
  border-radius: 1rem;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  color: var(--dark-green);
  font-weight: 500;
  position: absolute;
  top: 7rem;
  left: 1.8rem;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: var(--dark-green);
  font-weight: 300;
  position: absolute;
  top: 10rem;
  left: 1.8rem;
`;

const ProductRating = styled.p`
  font-size: 1.2rem;
  color: var(--dark-green);
  font-weight: 300;
  position: absolute;
  top: 10rem;
  right: 1.8rem;
`;

const ProductCard = (props) => {
  return (
    <CardContainer>
      <ProductImage src={props.imgUrl} alt={props.imgAlt} />
      <ProductDetails>
        <ProductName>{props.productName}</ProductName>
        <ProductPrice>$8.00</ProductPrice>
        <ProductRating>5</ProductRating>
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
