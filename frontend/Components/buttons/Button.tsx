import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  padding: 0.8rem 2.1rem;
  letter-spacing: 0.04rem;
  font-size: 1.1rem;
  font-weight: 300;
  border: none;
  border-radius: 0.313rem;
  background: rgb(221, 161, 94);
  background: -moz-linear-gradient(
    90deg,
    rgba(221, 161, 94, 1) 0%,
    rgba(188, 108, 37, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(221, 161, 94, 1) 0%,
    rgba(188, 108, 37, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(221, 161, 94, 1) 0%,
    rgba(188, 108, 37, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dda15e",endColorstr="#bc6c25",GradientType=1);
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  ${(props) =>
    props.btnFlat &&
    css`
      background: none;
      color: #333300;
    `}
`;

const Button = (props) => {
  return (
    <StyledButton btnFlat={props.flatStyle}>{props.buttonText}</StyledButton>
  );
};

export default Button;
