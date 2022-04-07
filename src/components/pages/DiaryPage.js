import React, {useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";

function DiaryPage(props) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>오늘의 일기 쓰기</h1>
                <form id={'diary_text'} onSubmit={handleSubmit}>
                    <DiaryInput required onChange={handleChange} placeholder={'오늘의 일기를 써주세요~'}>
                    </DiaryInput>

                    <DiarySave type={'submit'}>
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
  height: 3000px;
  padding-top: 120px;
  background-color: black;
`

const DiaryInput = styled.textarea`
  width: 90%;
  height: 50vh;
  border-radius: 10px;
  background-color: #1e1f21;
  color: #d9d9d9;
  font-size: 30px;
  margin: auto;
  display: block;
`

const DiarySave = styled.button`
  width: 200px;
  height: 50px;
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
`