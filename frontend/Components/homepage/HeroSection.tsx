import styled from "styled-components";
import Image from "next/image";

import WaveBg from "../../public/svg/HeaderWave.svg";
import Button from "../buttons/Button";

const HeroArea = styled.section`
  background: url(${WaveBg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 65rem;
`;

const HeroMaxWidth = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 120rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeroHeader = styled.div`
  cursor: default;
  color: var(--dark-green);
  > h1 {
    font-size: 3.5rem;
  }
  > h3 {
    font-weight: 300;
    font-size: 1.2rem;
    color: var(--light-green);
  }
  > button {
    margin-top: 3.5rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroArea>
      <HeroMaxWidth>
        <HeroHeader>
          <h1>Cat Farm Succulents</h1>
          <h3>Indoor and outdoor succulents.</h3>
          <Button buttonText="Our Store" />
        </HeroHeader>
        <Image
          src="/svg/plants.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        ></Image>
      </HeroMaxWidth>
    </HeroArea>
  );
};

export default HeroSection;
