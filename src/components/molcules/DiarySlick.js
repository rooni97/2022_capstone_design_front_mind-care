import React from 'react';
import styled from "styled-components";
import smile1 from "../../media/smile1.png";
import sad from "../../media/sad.png";
import {useNavigate} from "react-router-dom";

function DiarySlick(props) {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation("/diary");
    }

    return (
        <SlickContainer>
            <h1>오늘의 일기 쓰기</h1>
            <h4 style={{width: '40%', color: '#AE946A'}}>WRITE YOUR DIARY OF TODAY</h4>
            <h5 style={{width: '26%'}}>여러분의 오늘 하루는 어떠셨나요? 하루 동안 기쁘거나 우울했던 이야기를 적어주세요.</h5>
            <CustomButton onClick={handleClick}>Text Now</CustomButton>
            <ImageLeft src={smile1} />
            <ImageRight src={sad} />
        </SlickContainer>
    );
}

export default DiarySlick;

const SlickContainer = styled.div`
  display: block;
  padding-left: 40px;
  padding-top: 30px;
  font-size: 2vw;
  @media screen and (max-width: 700px) {
    padding: 3%;
  }
`;

const ImageLeft = styled.img`
  transform: rotate(-10deg);
  height: 50%;
  right: 30%;
  bottom: 30%;
  position: absolute;
`;

const ImageRight = styled.img`
  transform: rotate(10deg);
  height: 50%;
  right: 10%;
  bottom: 20%;
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