import React from 'react'
import styled from 'styled-components'
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import COLORS from '../../common/colors';

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    width: 90%;
  }
  `
const Profile = styled.div``
const Form = styled.div``
const Forms = styled.div``
const Button = styled.button``
const Name = styled.div``
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
const Profiles = styled.h1`
  font-size: 1.2rem;
  padding: 1rem 0;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 50px;

    &:hover{
      background-color: orange;
    }

    a{
      margin-top: 0.2rem;
      color: #fff;
    }
  }
`
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${COLORS.mint};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
`


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
        
      <Form>
        <Forms>
          <Name>
            <CgProfile/>
            <input type="text" placeholder='Fullname...'/>
          </Name>
          <Name>
            <MdAlternateEmail/>
            <input type="email" placeholder='Email...'/>
          </Name>
          <Name>
            <FiMail/>
            <textarea cols="30" rows="10" placeholder='Message...'/>
          </Name>
          <Button>Submit</Button>
        </Forms>        
      </Form>
    </Container>
  )
}

export default Footer