import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import COLORS from '../../common/colors';

const Container = styled.div`
  position: relative;
`
const Buttons = styled.div`
  .back {
    left: -1rem;
  }
`
const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  color: ${COLORS.mint};
  border: none;
  position: absolute;
  top: 45%;
  right: -1rem;
`
const IMAGE = require('./computer.png')
const data = [
  {
    img: IMAGE,
    disc: '디ㅓ릳ㄴㄹㄴ라너랴더ㅣ러냐ㅓㄹ디ㅑ런;ㅑㅓㄷ;랴ㅓ;럳;ㅑㄹ너;ㅐㅑ덜니ㅏ런;ㅑㅓㄷㄹ;ㅣㅑㄴ더리닐댜ㅓㄹ'
  },
  {
    img: IMAGE,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum har since the 1500s, when an unknown pri'
  },
  {
    img: IMAGE,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum har since the 1500s, when an unknown pri'
  },
  {
    img: IMAGE,
    disc: '디ㅓ릳ㄴㄹㄴ라너랴더ㅣ러냐ㅓㄹ디ㅑ런;ㅑㅓㄷ;랴ㅓ;럳;ㅑㄹ너;ㅐㅑ덜니ㅏ런;ㅑㅓㄷㄹ;ㅣㅑㄴ더리닐댜ㅓㄹ'
  },
  {
    img: IMAGE,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum har since the 1500s, when an unknown pri'
  },
  {
    img: IMAGE,
    disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum har since the 1500s, when an unknown pri'
  }

]

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
};

const SliderComp = () => {
  const arrowRef = useRef(null);
  console.log('arrowRef', arrowRef)
  let sliderProject = data.map((item, i) => (
    <Project key={i} item={item} />
  ))
  console.log('sliderProject', sliderProject)
  return (
    <Container>

      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <Button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack />
        </Button>
        <Button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward
          />
        </Button>
      </Buttons>
    </Container>
  )
}

export default SliderComp