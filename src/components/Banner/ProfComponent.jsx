import React from 'react'
import styled from 'styled-components'
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import COLORS from '../../common/colors';

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 790px){
    flex-direction: column;
    align-items: center;
  }
`
const Texts = styled.div`
  flex: 1;

`
const Title = styled.h4`
  padding: 1rem 0;
  font-weight: 500;
`
const Button = styled.button`
  padding: 0.7rem 2rem;
  margin-top: 3rem;
  cursor: pointer;  
  background-color: ${COLORS.mint};
  border: none;
  color: ${COLORS.white};
  font-weight: 500;
  filter: drop-shadow(0px 10px 10px #01be9551);
  &:hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }
`
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const SocialIcon = styled.a`
  width: 2.3rem;
  height: 2rem;
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  background-color: ${COLORS.mint};
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Profile = styled.div``
const Name = styled.h1`
  font-size: 2rem;
  font-family: sans-serif;
  letter-spacing: 2px;
  color: ${COLORS.mint};
`
const Paragraph = styled.p`
  font-weight: 300;
`
const IMG = styled.img`
  height: 400px;
  border-radius: 100px;
  @media screen and (max-width:790px){
    height: 200px;
  }
`

const IMAGE = require('./profile-pic.jpg')
const ProfComponent = () => {
  return (
    <Container>
      <Texts>
        <Title>Hello I'm</Title>
        <Name>Choi</Name>
        <Paragraph>I am Frontend Developer!!</Paragraph>
        <Button>let's talk</Button>
        <Social>
          <p>Check out my</p>
          <SocialIcons>
            <SocialIcon href="#" ><BiLogoInstagram /></SocialIcon>
            <SocialIcon href="#"><CiLinkedin /></SocialIcon>
          </SocialIcons>
        </Social>
      </Texts>
      <Profile>
        <IMG src={IMAGE} alt="" />
      </Profile>
    </Container>
  )
}

export default ProfComponent