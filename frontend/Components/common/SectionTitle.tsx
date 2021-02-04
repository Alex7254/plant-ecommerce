import styled from 'styled-components'

const StyledTitle = styled.h1 `
  color: #333300;
`

const SectionTitle = (props) => {
  return (
    <StyledTitle>
      {props.children}
    </StyledTitle>
  )
}

export default SectionTitle
