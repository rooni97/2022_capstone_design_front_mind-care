import React from 'react';
import styled from "styled-components";
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
            <h5 style={{width: '26%'}}>어떤 노래를 들어야 할지 모르겠다면? 이번 주 최신 인기 음악을 추천드릴게요.</h5>
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
  height: 100%;
  @media screen and (max-width: 700px) {
    padding: 3%;
  }
`;

const Image1 = styled.img`
  height: 30%;
  right: 33%;
  bottom: 45%;
  position: absolute;
`;

const Image2 = styled.img`
  height: 30%;
  right: 15%;
  bottom: 45%;
  position: absolute;
`;

const Image3 = styled.img`
  height: 30%;
  right: 33%;
  bottom: 10%;
  position: absolute;
`;

const Image4 = styled.img`
  height: 30%;
  right: 15%;
  bottom: 10%;
  position: absolute;
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