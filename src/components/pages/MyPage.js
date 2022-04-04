import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import CustomCalendar from '../atoms/CustomCalendar';

function MyPage(props) {
    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div style={{ marginLeft: 80 }}>
                    <h1 style={{ color: 'white', fontSize: 50 }}>마이 페이지</h1>
                    <h2 style={{ color: '#AE946A' }}>한달간의 감정, 음악 통계를 확인해보세요</h2>
                </div>
                <div style={{ marginLeft: 80 }}>
                    <CustomCalendar />
                </div>
            </PageContainer>
        </div>
    );
}

export default MyPage;

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