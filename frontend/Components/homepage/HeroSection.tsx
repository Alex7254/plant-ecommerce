import styled from 'styled-components'
import Image from 'next/image'

import WaveBg from '../../public/svg/HeaderWave.svg'
import Button from '../buttons/Button'

const HeroArea = styled.div`
  background: url(${WaveBg}) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  /* background-color:red; */
`;

const HeroText = styled.div`
cursor: default;
/* background-color:red; */
  color: #333300;
  > h1 {
    font-size: 3.2rem;
  }
  > h3 {
    font-weight: 300;
  }
  > button {
    margin-top: 45px;
  }
`
const HeroSection = () => {
  return (
    <HeroArea>
      <HeroText>
        <h1>Farm Cat Succulents</h1>
        <h3>Indoor and outdoor succulents.</h3>
        <Button buttonText="Our Blog" />
      </HeroText>
      <Image src="/svg/plants.svg"
        alt="Picture of the author"
        width={500}
        height={500}></Image>
    </HeroArea>
  )
}

export default HeroSection
