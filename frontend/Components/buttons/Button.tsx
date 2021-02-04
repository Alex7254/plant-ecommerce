import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  color: #fff;
  padding: 0.5rem 2rem;
  letter-spacing: 0.04rem;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  border-radius: 5px;
  background: rgb(221,161,94);
  background: -moz-linear-gradient(90deg, rgba(221,161,94,1) 0%, rgba(188,108,37,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(221,161,94,1) 0%, rgba(188,108,37,1) 100%);
  background: linear-gradient(90deg, rgba(221,161,94,1) 0%, rgba(188,108,37,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dda15e",endColorstr="#bc6c25",GradientType=1);

  ${props => props.btnFlat && css`
    background: none;
    color: #333300;
  `}
`

const Button = (props) => {
  return (
    <StyledButton btnFlat={props.flatStyle}>
      {props.buttonText}
    </StyledButton>
  )
}

export default Button
