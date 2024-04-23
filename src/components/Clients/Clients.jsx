import React, { useRef } from 'react'
import styled from 'styled-components'
import ColorContainer from '../../common/ColorContainer'
import COLORS from '../../common/colors'
import Slider from 'react-slick'
import ClientSlider from './ClientSlider'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media screen and (max-width: 840px) {
    width: 90%;
  }


  .slick-slider, .slick-list, .slick-track {
    padding: 0;
  }
  .slick-dots {
    /* background-color: #ffffff; */
    text-align: left;
    margin-left: 1rem;
  }
  .slick-dots li button:before {
    content: '';

  }
  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400mx ease-in-out;
    border-radius: 50px;
  }
  .slick-dots li.slick-active button {
    background: ${COLORS.mint};
    width: 15px;
  }
  .slick-dots li {
    /* margin: 0; */
  }
`
const Header = styled.h1`
  padding-top: 1rem;
  text-transform: capitalize;
`
const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: ${COLORS.mint};
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 530px) {
  display: none;
}
`


var settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
};

let clients = [
  {
    name: 'Sam Kim',
    position: 'Frontend',
    img_url: require('../../components/Banner/profile-pic.jpg'),
    stars: 3,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr unknown prin'
  },
  {
    name: 'Tom Kim',
    position: 'Frontend',
    img_url: require('../../components/Banner/profile-pic.jpg'),
    stars: 2,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr unknown prin'
  },
  {
    name: 'Aime Kim',
    position: 'Frontend',
    img_url: require('../../components/Banner/profile-pic.jpg'),
    stars: 3,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr unknown prin'
  },
  {
    name: 'Tam Kim',
    position: 'Frontend',
    img_url: require('../../components/Banner/profile-pic.jpg'),
    stars: 5,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr unknown prin'
  },
  {
    name: 'Sam Kim',
    position: 'Frontend',
    img_url: require('../../components/Banner/profile-pic.jpg'),
    stars: 3,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr unknown prin'
  }
]

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisk = clients.map((item, i) => (
    <ClientSlider key={i} item={item} />
  ))
  return (
    <Container>
      <div style={{ color: `${COLORS.mint}`, fontWeight: 700, textTransform: 'uppercase' }}>
        testimonials
      </div>
      <Header>What Clients say?</Header>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisk}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  )
}

export default Clients