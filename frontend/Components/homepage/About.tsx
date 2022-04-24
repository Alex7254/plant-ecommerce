import styled from "styled-components";

import SectionWrapper from "../../hoc/Layout/SectionWrapper";
import SectionTitle from "../common/SectionTitle";

const AboutBackground = styled.div`
  background-color: var(--beige);
  position: relative;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  .details {
    width: 50%;
  }
  p {
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.5;
  }
`;

const GardenerImage = styled.img`
  height: 38rem;
  width: 38rem;
  display: block;
  position: absolute;
  top: -6rem;
  right: 16rem;
`;

const About = () => {
  return (
    <AboutBackground>
      <SectionWrapper className="about-wrapper">
        <AboutContent>
          <div className="details">
            <SectionTitle>About</SectionTitle>
            <p>
              We carry multiple succulents that can help make your home or
              office feel cozier. From small to big they’re made to survive in
              various types of climates. These plant’s don’t much maintenance so
              you’ll be sure to keep your unique garden looking green and
              beatiful <br /> <br />
              Thank You for visiting our site
            </p>
          </div>
          <GardenerImage src={"/svg/gardener.svg"}></GardenerImage>
        </AboutContent>
      </SectionWrapper>
    </AboutBackground>
  );
};

export default About;
