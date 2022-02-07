import styled from 'styled-components'

const Wrapper = styled.div ` 
  /* height: 40rem; */
  max-width: 115rem;
  padding: 8rem 4rem;
  margin: 0 auto;
  /* background-color: red; */
`

const SectionWrapper = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default SectionWrapper
