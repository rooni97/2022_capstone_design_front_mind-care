import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";

function CommunityPage(props) {
    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div style={{height: '20%'}}>
                    <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>사용자 커뮤니티</h1>
                    <h2 style={{color: '#AE946A', marginLeft: 80, }}>SHARE YOUR OPINION WITH OTHERS</h2>
                    <h2 style={{color: '#E5E5E5', marginLeft: 80}}>여러분의 감정 관리법을 다른 사람들과 공유하고 의견을 나눠보세요.</h2>
                </div>
                <div style={{height: '100%'}}>
                    <h1 style={{color: 'white', marginLeft: 80}}>커뮤니티 위치하는 곳</h1>
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