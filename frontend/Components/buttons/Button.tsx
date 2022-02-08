import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${(props) =>
    props.btnFlat &&
    css`
      background: none;
      color: #333300;
    `}

  color: #fff;
  padding: 0.8rem 2.1rem;
  letter-spacing: 0.04rem;
  font-size: 1.1rem;
  font-weight: 300;
  border: none;
  border-radius: 0.313rem;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    rgb(221, 161, 94),
    rgb(188, 108, 37),
    var(--dark-green),
    var(--light-green)
  );
  transition: all 0.4s ease;
  &:hover {
    background-position: 100% 0;
  }
`;

const Button = (props) => {
  return (
    <StyledButton btnFlat={props.flatStyle}>{props.buttonText}</StyledButton>
  );
};

export default Button;
