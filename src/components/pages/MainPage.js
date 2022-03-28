import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Slick from "../molcules/Slick";

function MainPage(props) {
    return (
        <div>
            <Navigation />
            <PageContainer>
                <div className={'slick'}>
                    <Slick />
                </div>
                <div id="1" className={'main'} style={{backgroundColor: 'white', height: '100vh'}}>
                    <h1>오늘 이 노래 어떠세요?</h1>
                </div>
                <div id="2" className={'main'} style={{backgroundColor: 'white', height: '100vh'}}>
                    <h1>이번 주 인기 음악</h1>
                </div>
            </PageContainer>
        </div>
    );
}

export default MainPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
  .slick {
    margin: auto;
    width: 80%;
    height: 95vh;
  }
  .main {
    padding-top: 120px;
  }
`

