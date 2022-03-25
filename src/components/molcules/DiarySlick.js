import React from 'react';
import styled from "styled-components";
import CustomButton from "../atoms/CustomButton";
import this1 from "../../media/this1.png"
import this2 from "../../media/this2.png"

function ThisMusicSlick(props) {
    return (
        <SlickContainer>
            <h1>오늘의 일기 쓰기</h1>
            <h4 style={{width: '40%'}}>WRITE YOUR DIARY OF TODAY</h4>
            <h5 style={{width: '26%'}}>여러분의 오늘 하루는 어떠셨나요? 하루 동안 기쁘거나 우울했던 이야기를 적어주세요.</h5>
            <CustomButton>Text Now</CustomButton>
        </SlickContainer>
    );
}

export default ThisMusicSlick;

const SlickContainer = styled.div`
  display: block;
  padding-left: 40px;
  padding-top: 30px;
  font-size: 1.8rem;
`;

const ImageLeft = styled.img`
  transform: rotate(-10deg);
  height: 250px;
  right: 300px;
  bottom: 150px;
  position: absolute;
`;

const ImageRight = styled.img`
  transform: rotate(10deg);
  height: 250px;
  right: 100px;
  bottom: 100px;
  position: absolute;
`;