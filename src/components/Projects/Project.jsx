import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-in-out;
`
const DescriptionContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: -10rem;
  text-align: left;
  padding: 0.5rem;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8));
  transition: all 400ms ease-in-out;
`

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover > ${Image}  {
    transform: scale(1.1);
  }

  &:hover > ${DescriptionContainer}  {
    bottom: 0;
  }
`

const Header = styled.h1`
  font-size: 1rem;
`
const Paragraph = styled.p`
  width: 90%;
  font-size: 0.8rem;
`
const Link = styled.a`
  margin-left: 0.4rem;
  color: red;

`
const Project = (props) => {
  const { img, disc } = props.item;
  return (
    <Container className='project'>
      <Image src={img} alt='computer' height={200} />
      <DescriptionContainer>
        <Header>Description</Header>
        <Paragraph>
          {disc}
          <Link href="#">demo</Link>
        </Paragraph>
      </DescriptionContainer>
    </Container>
  )
}

export default Project