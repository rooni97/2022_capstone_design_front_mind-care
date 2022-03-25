import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";

function MusicBehaviorPage(props) {
    return (
        <div>
            <Navigation />
            <PageContainer>
                <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>~할땐 이런 노래 어떠세요?</h1>
                <div style={{color: 'white', backgroundColor: 'black', height: '20%'}}>
                    <h1>음악 추천</h1>
                </div>
                <div style={{color: 'white', backgroundColor: 'black', height: '20%'}}>
                    <h1>행동 추천</h1>
                </div>
            </PageContainer>
        </div>
    );
}

export default MusicBehaviorPage;

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