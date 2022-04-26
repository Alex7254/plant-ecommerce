import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 90rem;
  padding: 8rem 4rem;
  margin: 6rem auto;
`;

const SectionWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SectionWrapper;
