import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import smile1 from '../../media/smile1.png';
import GetWeather from "../atoms/GetWeather";
import axios from 'axios';

function DiaryPage(props) {
    const [text, setText] = useState(''); // 일기
    const [emoji, setEmoji] = useState(''); // 이모티콘
    const [loading, setLoading] = useState(true);

    let Today = new Date();
    let CurrentUserDate = {
        year: Today.getFullYear(),
        month: Today.getMonth() + 1,
        date: Today.getDate()
    };
    let DateStr = `${CurrentUserDate.year}/${CurrentUserDate.month}/${CurrentUserDate.date}`;

    let CurrentWeather = GetWeather(setLoading);
    const CurrentWeatherMain = CurrentWeather[1]; // 날씨 ex) Rain, Clouds, ...

    let navigate = useNavigate();

    const ImageClick = (e) => {
        setEmoji(e.target.id);
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const requestDiary = (e) => {
        axios.post('http://3.34.8.240/diary', {
            content: text,
            emoticon: emoji,
            weather: CurrentWeatherMain,
            credat: DateStr,
            cretim: Today.getHours(),
        })
            .then((res) => {
                console.log(res.data);
                alert('Success');
            })
            .catch((err) => {
                console.log(err);
                alert('fail');
            })
    }

    const handleDiary = (e) => {
        e.preventDefault();
        if (text.length === 0 && emoji.length === 0) {
            alert('당신의 감정을 알려주세요!');
            return;
        }
        else {
            requestDiary();
            navigate('/music');
        }
    }

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <h1>오늘의 일기 쓰기</h1>
                <form id={'diary_text'} onSubmit={handleDiary}>
                    <DiaryInput onChange={handleText} placeholder={'오늘의 일기를 써주세요~'}>
                    </DiaryInput>

                    <EmojiContainer>
                        <div>
                            <img style={{ cursor: 'pointer' }} onClick={ImageClick} src={smile1} id='기쁨' />
                            <h3>기쁨</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>슬픔</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>분노</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>지루</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>감사</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>피로</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>스트레스</h3>
                        </div>
                        <div>
                            <img src={smile1} />
                            <h3>신남</h3>
                        </div>
                    </EmojiContainer>

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
  height: 880px;
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
  height: 20vh;
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
    
    div {
        text-align: center;
    }
    img {
        width: 60%;
    }

    h3 {
        color: white;
    }
    @media screen and (max-width: 700px) {
        margin-top: 5%;

        h3 {
            font-size: 12px;
        }

        img {
            width: 80%;
        }
    }
`