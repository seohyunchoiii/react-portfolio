import React, { useState } from 'react'
import styled from 'styled-components'
import { GiCandleFlame } from "react-icons/gi";
import COLORS from '../../common/colors';
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  @media screen and (max-width:763px) {
    width: 90%;
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
`
const Navbar = styled.div`
  @media screen and (max-width: 640px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.mint};
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${props => props.bar ? "100vh" : 0};
    transition: height 400ms ease-in-out;
    overflow: hidden;
  }
`
const Link = styled.a`
  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #fff;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }
    &:hover:before{
      transform: scale(1);
      transform-origin: left;
    }
    &:hover{
      opacity: 0.7;
    }
`



const LogoIcon = styled.div`
  font-size: 1.8rem;
  color: ${COLORS.mint};
`
const Bars = styled.div`
  display: none;
  z-index: 999;
  @media screen and (max-width:640px) {
    display: block;
    font-size: 20px;
    }
`


const Header = () => {
    const [bar, setBar] = useState(false);
  return (
    <Container>
      <Logo>
        <LogoIcon><GiCandleFlame/></LogoIcon>
        Portfolio
      </Logo>
      <Navbar bar={bar}>
        <Link href="#home">Home</Link>
        <Link href="#service">Services</Link>
        <Link href="#project">Projects</Link>
        <Link href="#client">Testimonials</Link>
        <Link href="#footer">Portfolio</Link>
      </Navbar>
      <Bars onClick={() => setBar(!bar)}>
        {bar ? <CgClose/> : <FaBars/>}
      </Bars>
    </Container>
  )
}

export default Header
