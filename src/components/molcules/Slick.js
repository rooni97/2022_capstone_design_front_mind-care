import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import ThisMusicSlick from "./ThisMusicSlick";
import DiarySlick from "./DiarySlick";
import FamousMusicSlick from "./FamousMusicSlick";

class CustomSlide extends Component {
    render() {
        const { index, content, ...props } = this.props;
        return (
            <div style={{color: '#ffffff'}}>
                {content}
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
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div>
                <StyledSlider {...settings}>
                    <CustomSlide index={1} content={<DiarySlick />} />
                    <CustomSlide index={2} content={<ThisMusicSlick src={this.props.src} />} />
                    <CustomSlide index={3} content={<FamousMusicSlick />} />
                </StyledSlider>
            </div>
        );
    }
}

const StyledSlider = styled(Slider)`
  .slick-slide div{
    width: 100%;
    height: 70vh;
    //background-color: #282c34;
    position: relative;
    background-color: black;
    display: block;
  }
  .slick-arrow.slick-next{
    background-color: black;
    //right: 10px;
  }
  .slick-dots li button::before{
    color: white;
  }
`