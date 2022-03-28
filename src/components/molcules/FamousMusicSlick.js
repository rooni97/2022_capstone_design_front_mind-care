import React from 'react';
import styled from "styled-components";
import CustomButton from "../atoms/CustomButton";
import music1 from "../../media/music1.png"
import music2 from "../../media/music2.png"
import music3 from "../../media/music3.png"
import music4 from "../../media/music4.png"
import {Link} from "react-scroll";

function FamousMusicSlick(props) {
    return (
        <SlickContainer>
            <h1>이번 주 인기 음악</h1>
            <h4 style={{width: '40%', color: '#AE946A'}}>POPULAR MUSIC OF THE WEEK</h4>
            <h5 style={{width: '26%'}}>이번 주 10명 중 4명이 ~한 감정을 느끼고 이런 노래들을 감상했어요.</h5>
            <div>
                <Link to="2" spy={true} smooth={true}>
                    <CustomButton>Play Now</CustomButton>
                </Link>
            </div>
            <Image1 src={music1}/>
            <Image2 src={music2}/>
            <Image3 src={music3}/>
            <Image4 src={music4}/>
        </SlickContainer>
    );
}

export default FamousMusicSlick;

const SlickContainer = styled.div`
  display: block;
  padding-left: 40px;
  padding-top: 30px;
  font-size: 2vw;
`;

const Image1 = styled.img`
  height: 35%;
  right: 34%;
  bottom: 45%;
  position: absolute;
`;

const Image2 = styled.img`
  height: 35%;
  right: 16%;
  bottom: 45%;
  position: absolute;
`;

const Image3 = styled.img`
  height: 35%;
  right: 34%;
  bottom: 10%;
  position: absolute;
`;

const Image4 = styled.img`
  height: 35%;
  right: 16%;
  bottom: 10%;
  position: absolute;
`;