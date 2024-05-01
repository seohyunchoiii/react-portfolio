import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import styled from 'styled-components';
import Card from './Card';
import COLORS from '../../common/colors';

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0rem;
  @media screen and (max-width: 840px) {
    /* width: 100%; */
    /* padding: 0 30px; */
  }
`
const Title = styled.h4`
  display: flex;
  gap: 5px;
`
const Sentence = styled.h1`
  padding-top: 1rem;

`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 3rem;
`
const ColorText = styled.span`
  color: ${COLORS.mint};
`

const Services = () => {
  return (
    <Container id='service'>
      <Title>
        <div>My</div>
        <ColorText>
          Services
        </ColorText>
      </Title>
      <Sentence>
        What I Do
      </Sentence>
      <Cards>
        <Card
          Icon={MdDesignServices}
          title={'ui/ux designer'}
          disc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin`}
        />
        <Card
          Icon={CgWebsite}
          title={'web designer'}
          disc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin`}
        />
      </Cards>
    </Container>
  )
}

export default Services