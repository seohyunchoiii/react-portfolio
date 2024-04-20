import React from 'react'
import styled from 'styled-components'
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";

const Container = styled.div``
const Texts = styled.div``
const Title = styled.h4``
const Button = styled.div``
const Social = styled.div``
const SocialIcons = styled.div``
const SocialIcon = styled.a``
const Profile = styled.div`
`

const IMAGE = require('./profile-pic.jpg')
const ProfComponent = () => {
  return (
    <Container>
      <Texts>
        <Title>Hello I'm</Title>
        <h3>Choi</h3>
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
      <Profile>
        <img src={IMAGE} alt="" style={{height: '200px'}}/>
      </Profile>
    </Container>
  )
}

export default ProfComponent