import styled from 'styled-components'

import WaveBg from '../../public/svg/HeaderWave.svg'

const HeroArea = styled.div`
   background: url(${WaveBg}) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 150px;
  /* background-color: #946464; */
`;

const HeroSection = () => {
  return (
    <HeroArea>
      <div>
        <h1>Cat Farm Succulents</h1>
        <h3>Indoor and outdoor succulents.</h3>
      </div>
    </HeroArea>
  )
}

export default HeroSection
