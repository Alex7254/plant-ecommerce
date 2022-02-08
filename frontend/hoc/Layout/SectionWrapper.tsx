import styled from 'styled-components'

const Wrapper = styled.div ` 
  /* height: 40rem; */
  max-width: 120rem;
  padding: 8rem 0;
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
