import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";

function DiaryPage(props) {
    return (
        <div>
            <Navigation />
            <PageContainer>
                <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>오늘의 일기 쓰기</h1>
                
                <DiaryInput>
                </DiaryInput>
                
                <DiarySave>
                저장하기
                </DiarySave>

            </PageContainer>
        </div>
    );
}

export default DiaryPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
`

const DiaryInput = styled.textarea`
  width: 80%;
  min-height: 500px;
  border-radius: 10px;
  background-color: #1e1f21;
  color: #d9d9d9;
  font-size: 30px;
  margin-left: 80px;
`

const DiarySave = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border: none;
  background-color: #1e1f21;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  float: right;
`