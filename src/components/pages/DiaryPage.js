import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import smile1 from '../../media/smile1.png';

function DiaryPage(props) {
    const [text, setText] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        navigate('/music');
    }
    
    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <h1>오늘의 일기 쓰기</h1>
                <form id={'diary_text'} onSubmit={handleSubmit}>
                    <DiaryInput required onChange={handleChange} placeholder={'오늘의 일기를 써주세요~'}>
                    </DiaryInput>

                    <EmojiContainer>
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                        <img style={{ width: '10%' }} src={smile1} />
                    </EmojiContainer>
                    <DiarySave type={'submit'} onClick={handleClick}>
                        저장하기
                    </DiarySave>
                </form>
            </PageContainer>
        </div>
    );
}

export default DiaryPage;

const PageContainer = styled.div`
  width: 100%;
  height: 850px;
  padding-top: 120px;
  background-color: black;
  h1 {
      color: white;
      margin-left: 5%;
      font-size: 4vw;
  }
  @media screen and (max-width: 900px) {
    h1 {
        font-size: 7vw;
    }
    height: 100%;
    min-height: calc(100vh - 100px);
  }
`

const DiaryInput = styled.textarea`
  width: 90%;
  height: 30vh;
  border-radius: 10px;
  background-color: #1e1f21;
  color: #d9d9d9;
  font-size: 30px;
  margin: auto;
  display: block;

  @media screen and (max-width: 700px) {
    width: 85%;
    height: 30vh;
  }
`

const DiarySave = styled.button`
  width: 20%;
  height: 5vh;
  font-size: 20px;
  border: none;
  background-color: #1e1f21;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  float: right;
  margin-top: 40px;
  margin-right: 5%;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 30%;
    height: 6vh;
  }
`

const EmojiContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 700px) {
        margin-top: 5%;
    }
`