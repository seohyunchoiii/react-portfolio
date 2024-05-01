import React from 'react'
import styled from 'styled-components'
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { Slide } from 'react-awesome-reveal';

const Container = styled.div``
const Texts = styled.div``
const Title = styled.h4``
const Button = styled.button``
const Social = styled.div``
const SocialIcons = styled.div``
const SocialIcon = styled.a``
const Profile = styled.div`
`

const IMAGE = require('./profile-pic.jpg')
const ProfComponent = () => {
  return (
    <Container id='home'>
      <Slide direction="left">
        <Texts>
          <Title>Hello I'm</Title>
          <h3>Seohyun Choi</h3>
          <p>I am Frontend Developer!!</p>
          <Button>let's talk</Button>
          <Social>
            <p>Check out my</p>
            <SocialIcons>
              <SocialIcon href="#" ><BiLogoInstagram /></SocialIcon>
              <SocialIcon href="#"><CiLinkedin/></SocialIcon>
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