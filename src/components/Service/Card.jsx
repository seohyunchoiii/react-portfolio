import React from 'react'
import styled from 'styled-components'
import COLORS from '../../common/colors'

const Container = styled.div`
  /* width: 100%; */
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43,53) 100%);
  padding: 1rem;
  text-align: center;
`
const Info = styled.span`
  font-size: 4rem;
  color: ${COLORS.mint};
`
const Header = styled.h1`
  font-size: 1.2rem;
  padding-bottom: 1rem;
`
const Paragraph = styled.p`
  font-size: 0.8rem;
`

const Card = ({ Icon, disc, title }) => {
  return (
    <Container>
      <Info><Icon /></Info>
      <Header>{title}</Header>
      <Paragraph>{disc}</Paragraph>

    </Container>
  )
}

export default Card