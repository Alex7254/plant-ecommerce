import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 120rem;
  padding: 8rem 0;
  margin: 6rem auto;
`;

const SectionWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SectionWrapper;
