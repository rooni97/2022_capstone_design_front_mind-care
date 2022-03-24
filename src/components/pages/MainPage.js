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
                <div style={{backgroundColor: 'white', height: '100%'}}>
                    <h1>영상? 공지사항? 커뮤니티?</h1>
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
    width: 95%;
    height: 90vh;
  }
`

