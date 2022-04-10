import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import GetWeather from "../atoms/GetWeather";
import GetUserTime from "../atoms/GetUserTime";
import GetLocation from "../atoms/GetLocation";
import Post from "../atoms/Post";
import CustomButton from "../atoms/CustomButton";

function CommunityPage(props) {
    return (
        <div id="0">
            <Navigation/>
            <PageContainer>
                <div style={{height: '10%'}}>
                    <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>사용자 커뮤니티</h1>
                    <h2 style={{color: '#AE946A', marginLeft: 80,}}>SHARE YOUR OPINION WITH OTHERS</h2>
                    <h2 style={{color: '#E5E5E5', marginLeft: 80}}>여러분의 감정 관리법을 다른 사람들과 공유하고 의견을 나눠보세요.</h2>
                </div>
                <div style={{width: '100%', height: '6%', display: 'flex', fontSize: '2rem'}}>
                    <h1 style={{color: 'white', marginLeft: 80, borderBottom: '4px solid red', height: '40%'}}>최신</h1>
                    {/*<h1 style={{color: 'white', marginLeft: 80}}>인기</h1>*/}
                    <div style={{width: '80%', display: "flex", justifyContent: 'right', alignItems: 'center'}}>
                        <CustomButton style={{ width: '20%',height: '30%'}}>게시글 작성</CustomButton>
                    </div>
                </div>
                <div style={{height: '100%', width: '100%'}}>
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
  .slick {
    margin: auto;
    width: 95%;
    height: 90vh;
  }
`