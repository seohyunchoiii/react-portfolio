import React from 'react'
import styled from 'styled-components'
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 840px) {
    width: 90%;
  }
  `
const Profile = styled.div``
const Form = styled.div``
const Header = styled.h1``
const Address = styled.h1`
  padding: 1rem 0;
  font-size: 1.2rem;
`
const Paragraph = styled.div`
  width: 60%;
  padding-top: 0.5rem;
  font-size: 0.9rem;
`
const Links = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`
const Number = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5remm;
  a {
    text-decoration: none;
    color: lightgray;
    &:hover {
      color: orange;
    }
  }
`
const Mail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5remm;
  a {
    text-decoration: none;
    color: lightgray;
    &:hover {
      color: orange;
    }
  }
`
const Profiles = styled.h1``
const Icons = styled.div``
const ArrowUp = styled.div``


const Footer = () => {
  return (
    <Container>
      <Profile>
        <Header>Portfolio</Header>
        <Address>Address
        <Paragraph>20, Gangneung-daero 194beon-gil, Gangneung-si,
        Gangwon-do, Republic of Korea</Paragraph>
        </Address>
        <Links>Contact me directly:</Links>
        <Number>
          <span><FiPhoneCall/></span>
          <a href="01049831696">010 4983 1696</a>
        </Number>
        <Mail>
          <span><HiOutlineMailOpen/></span>
          <a href="mailto:fooodie@naver.com">fooodie@naver.com</a>
        </Mail>
        <Profiles>Check my profiles</Profiles>
        <Icons>
          <span><a href="#"><AiFillGithub/></a></span>
          <span><a href="#"><AiFillLinkedin/></a></span>
          <span><a href="#"><BsFacebook/></a></span>
          <span><a href="#"><BsSlack/></a></span>
        </Icons>
        <ArrowUp><AiOutlineArrowUp/></ArrowUp>
      </Profile>
        

      <Form></Form>
    </Container>
  )
}

export default Footer