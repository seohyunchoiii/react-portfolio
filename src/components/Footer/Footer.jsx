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
  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
  `
const Profile = styled.div`
  flex: 1;
`

const Header = styled.h1``
const Address = styled.h1`
  padding: 1rem 0;
  font-size: 1.2rem;
`
const Paragraph = styled.div`
  width: 60%;
  padding-top: 0.5rem;
  font-size: 0.9rem;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
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
  @media screen and (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`
const Form = styled.div`
  flex: 1;
  font-size: 1.3rem;
  padding-bottom: 0.7rem;
`

const Forms = styled.div`
  background-color: #191923;
  padding: 0.8rem;
  border-radius: 5px;
`

const Name = styled.div`
  display: flex;
  border: 1px solid gray;
  margin-bottom: 0.5rem;
  input, textarea {
    width: 100%;
    border: none;
    outline: none;
    color: #fff;
    background-color: transparent;
    padding: 1rem 0.5rem;
  }
  span{
    background-color: #3e3e3e;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .messageIcon{
    align-items: flex-start;
    padding-top: 0.5rem;
  }
`
const Button = styled.button`
  width: 5rem;
  height: 1.8rem;
  background-color: ${COLORS.mint};
  border: none;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 5px #01be9551);
  cursor: pointer;
  &:hover{
    filter: drop-shadow(0px 6px 9px #01be9551);
  }
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
            <span><CgProfile/></span>
            <input type="text" placeholder='Fullname...'/>
          </Name>
          <Name>
            <span><MdAlternateEmail/></span>
            <input type="email" placeholder='Email...'/>
          </Name>
          <Name>
            <span className='messageIcon'><FiMail/></span>
            <textarea cols="30" rows="10" placeholder='Message...'/>
          </Name>
          <Button>Submit</Button>
        </Forms>        
      </Form>
    </Container>
  )
}

export default Footer