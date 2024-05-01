import React from 'react'
import styled from 'styled-components'
import ColorContainer from '../../common/ColorContainer'
import { RowContainer } from '../../common/commonStyle'
import Slider from './SliderComp'
import SliderComp from './SliderComp'


const Container = styled.div`
  /* width: 80%; */
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  @media screen and (max-width: 840px) {
    /* width: 90%; */
  }
`
const Recent = styled.div`
  /* font-size: 32px; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const Paragraph = styled.p`
  font-size: 0.9rem;
  width: 28rem;
  margin: 0 auto;
  padding: 1rem 0;
  @media screen and (max-width: 500px){
    /* width: 90%; */
  }
`
const Slide = styled.div``

const Projects = () => {
  return (
    <Container id='project'>
      <Recent>
        <RowContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h1>Recent</h1>
          <ColorContainer content={'Projects'} size={'1.9rem'} />
        </RowContainer>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin
        </Paragraph>
        <Slide>
          <SliderComp />
        </Slide>
      </Recent>
    </Container>
  )
}

export default Projects