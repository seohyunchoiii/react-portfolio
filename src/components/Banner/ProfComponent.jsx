import React from 'react'
import styled from 'styled-components'
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { Slide } from 'react-awesome-reveal';
import COLORS from '../../common/colors';

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 840px){
    width: 90%;
  }
  @media screen and (max-width: 640px){
    flex-direction: column;
  }
`
const Texts = styled.div`
  flex: 1;
`
const Title = styled.h4`
  padding: 1rem 0;
  font-weight: 500;
`

const Name = styled.h1`
  font-size: 2rem;
  letter-spacing: 2px;
`
const Frontend = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 1.2rem;
  text-transform: capitalize;
`
const Button = styled.button`
  padding: 0.7rem 2rem;
  margin-top: 3rem;
  cursor: pointer;
  background-color: ${COLORS.mint};
  border: none;
  color: #fff;
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
  p{
    font-size: 0.9rem;
    @media screen and (max-width: 690px){
      font-size: 0.7rem;
      }
  }
  
`
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    width: 2.3rem;
    height: 2rem;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background-color: ${COLORS.mint};
    position: relative;
  }
`
const SocialIcon = styled.a`
  color: #fff;
  position: absolute;
  align-items: center;
  top: 20%;
  right: 30%;
  `

const Profile = styled.div`
  img{
    
  }
  
  
`

const IMAGE = require('./profile-pic.jpg')
const ProfComponent = () => {
  return (
    <Container id='home'>
      <Slide direction="left">
        <Texts>
          <Title>Hello I'm</Title>
          <Name>Seohyun Choi</Name>
          <Frontend>I am Frontend Developer!!</Frontend>
          <Button>Let's talk</Button>
          <Social>
            <p>Check out my</p>
            <SocialIcons>
              <span><SocialIcon href="#" ><BiLogoInstagram /></SocialIcon></span>
              <span><SocialIcon href="#"><CiLinkedin/></SocialIcon></span>
            </SocialIcons>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={IMAGE} alt="" style={{height: '200px'}}/>
        </Profile>
      </Slide>
    </Container>
  )
}

export default ProfComponent