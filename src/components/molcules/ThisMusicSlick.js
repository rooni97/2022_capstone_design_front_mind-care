import React from 'react';
import styled from "styled-components";
import { Link } from "react-scroll";

function ThisMusicSlick(props) {
    return (
        <SlickContainer>
            <h1>오늘 이 노래 어떠세요?</h1>
            <h4 style={{width: '40%', color: '#AE946A'}}>HOW DO YOU LIKE THIS MUSIC TODAY?</h4>
            <h5 style={{width: '24%'}}>오늘 날씨와 지금 시간대,
                    여러분이 느낄 만한 감정과 맞는 이런 노래들을 추천드릴게요.</h5>
            <div>
                <Link to="1" spy={true} smooth={true}>
                    <CustomButton>Play Now</CustomButton>
                </Link>
            </div>
            {props.srcList[0] && <ImageLeft src={props.srcList[0].thumbnails.high.url}/>}
            {props.srcList[2] && <ImageRight src={props.srcList[2].thumbnails.high.url}/>}
        </SlickContainer>
    );
}

export default ThisMusicSlick;

const SlickContainer = styled.div`
  display: block;
  padding-left: 40px;
  padding-top: 30px;
  font-size: 2vw;
  height: 100%;
  
  @media screen and (max-width: 700px) {
    padding: 3%;
  }
`;

const ImageLeft = styled.img`
  transform: rotate(-10deg);
  height: 50%;
  right: 30%;
  bottom: 20%;
  position: absolute;
  @media screen and (max-width: 700px) {
    height: 30%;
    bottom: 50%;
  }
`;

const ImageRight = styled.img`
  transform: rotate(10deg);
  height: 50%;
  right: 10%;
  bottom: 10%;
  position: absolute;
  @media screen and (max-width: 700px) {
    height: 30%;
    bottom: 35%;
  }
`;

const CustomButton = styled.button`
  width: 20%;
  height: 10%;
  font-size: 70%;
  border: none;
  background-color: #1e1f21;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  float: left;
  margin-top: 10px;
  //margin-right: 5%;
  cursor: pointer;
  display: block;
`;