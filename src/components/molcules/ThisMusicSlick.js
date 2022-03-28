import React from 'react';
import styled from "styled-components";
import CustomButton from "../atoms/CustomButton";
import this1 from "../../media/this1.png"
import this2 from "../../media/this2.png"
import { Link } from "react-scroll";

function ThisMusicSlick(props) {
    return (
        <SlickContainer>
            <h1>오늘 이 노래 어떠세요?</h1>
            <h4 style={{width: '40%', color: '#AE946A'}}>HOW DO YOU LIKE THIS MUSIC TODAY?</h4>
            <h5 style={{width: '40%'}}>하루종일 비가 오는 오늘 밤,
                    당신의 감정과 맞는 이런 노래들을 추천드릴게요.</h5>
            <div>
                <Link to="1" spy={true} smooth={true}>
                    <CustomButton>Play Now</CustomButton>
                </Link>
            </div>
            <ImageLeft src={this1}/>
            <ImageRight src={this2}/>
        </SlickContainer>
    );
}

export default ThisMusicSlick;

const SlickContainer = styled.div`
  display: block;
  padding-left: 40px;
  padding-top: 30px;
  font-size: 2vw;
`;

const ImageLeft = styled.img`
  transform: rotate(-10deg);
  height: 50%;
  right: 30%;
  bottom: 20%;
  position: absolute;
`;

const ImageRight = styled.img`
  transform: rotate(10deg);
  height: 50%;
  right: 10%;
  bottom: 15%;
  position: absolute;
`;