import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import GetWeather from "../atoms/GetWeather";
import GetUserTime from "../atoms/GetUserTime";
import GetLocation from "../atoms/GetLocation";
import Post from "../atoms/Post";

function CommunityPage(props) {
    return (
        <div id="0">
            <Navigation/>
            <PageContainer>
                <div style={{height: '10%'}}>
                    <h1>사용자 커뮤니티</h1>
                    <h2 style={{color: '#AE946A'}}>SHARE YOUR OPINION WITH OTHERS</h2>
                    <h2 style={{color: '#E5E5E5'}}>여러분의 감정 관리법을 다른 사람들과 공유하고 의견을 나눠보세요.</h2>
                </div>
                <div style={{width: '100%', height: '5%', display: 'flex', fontSize: '2rem'}}>
                    <h1 className={'recent'}>최신</h1>
                    {/*<h1 style={{color: 'white', marginLeft: 80}}>인기</h1>*/}
                    <div style={{width: '81%', display: "flex", justifyContent: 'right', alignItems: 'center', marginRight: '5%'}}>
                        <CustomButton>게시글 작성</CustomButton>
                    </div>
                </div>
                <div style={{height: '100%', width: '100%'}}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </PageContainer>
        </div>
    );
}

export default CommunityPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
  h1 {
    color: white;
    margin-left: 5%;
    font-size: 5vw;
    width: 50%;
    @media screen and (max-width: 700px) {
      font-size: 6vh;
      width: 100%;
    }
  }
  .recent {
    color: white;
    margin-left: 5%;
    font-size: 5vw;
    height: 55%;
    width: 9%;
    border-bottom: 4px solid red;
    @media screen and (max-width: 700px) {
      font-size: 5vh;
      height: 40%;
      width: 24%;
      border-bottom: 3px solid red;
    }
  }
  h2 {
    font-size: 2vw;
    margin-left: 5%;
    @media screen and (max-width: 700px) {
      font-size: 1.5vh;
    }
  }
`;

const CustomButton = styled.button`
  width: 20%;
  height: 40%;
  font-size: 20px;
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
  @media screen and (max-width: 700px) {
    width: 60%;
  }
`;