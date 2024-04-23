import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Profile = styled.div``
const Form = styled.div``
const Header = styled.h1``
const Address = styled.h1``
const Paragraph = styled.div``
const Links = styled.h1``
const Icons = styled.div``


const Footer = () => {
  return (
    <Container>
      <Profile>
        <Header>Portfolio</Header>
        <Address>Address</Address>
        <Paragraph>20, Gangneung-daero 194beon-gil, Gangneung-si,
        Gangwon-do, Republic of Korea</Paragraph>
        <Links>Contact me directly:</Links>
      </Profile>

      <Form></Form>
    </Container>
  )
}

export default Footer