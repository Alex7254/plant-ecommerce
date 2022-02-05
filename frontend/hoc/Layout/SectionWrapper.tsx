import styled from 'styled-components'

const Wrapper = styled.div ` 
  background-color: darkred;
  height: 40rem;
  padding: 0 150px;
`

const SectionWrapper = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default SectionWrapper
