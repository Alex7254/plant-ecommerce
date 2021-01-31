import styled from 'styled-components'

import WaveBg from '../../public/svg/HeaderWave.svg'

const HeroArea = styled.div`
   background: url(${WaveBg}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  background-color: red;
`;

const HeroSection = () => {
  return (
    <HeroArea>
    </HeroArea>
  )
}

export default HeroSection
