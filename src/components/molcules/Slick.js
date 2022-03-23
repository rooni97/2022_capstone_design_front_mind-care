import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

class CustomSlide extends Component {
    render() {
        const { index, content, ...props } = this.props;
        return (
            <div style={{color: '#ffffff'}}>
                <h1>{content}</h1>
            </div>
        );
    }
}

export default class Slick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <StyledSlider {...settings}>
                    <CustomSlide index={1} content={'오늘 이 노래 어떠세요?'} />
                    <CustomSlide index={2} content={'오늘의 일기쓰기'} />
                    <CustomSlide index={3} content={'이번 주 인기음악'} />
                </StyledSlider>
            </div>
        );
    }
}

const StyledSlider = styled(Slider)`
  .slick-slide div{
    height: 500px;
    background-color: #282c34;
  }
  .slick-arrow{
    background-color: black;
  }
  .slick-dots li button::before{
    color: white;
  }
`