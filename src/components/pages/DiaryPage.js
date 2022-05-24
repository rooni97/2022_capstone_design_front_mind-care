import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GetWeather from "../atoms/GetWeather";
import axios from 'axios';
import moment from 'moment';

function DiaryPage(props) {
    const [text, setText] = useState(''); // 일기
    const [emoji, setEmoji] = useState(''); // 이모티콘
    const [loading, setLoading] = useState(true);
    let nowTime = moment().format('HH:mm');
    let nowDate = moment().format('YYYYMMDD');

    let CurrentWeather = GetWeather(setLoading);
    const CurrentWeatherMain = CurrentWeather[1]; // 날씨 ex) Rain, Clouds, ...
    let nowWeather = '';

    switch (CurrentWeatherMain) {
        case 'Clear':
            nowWeather = '맑음';
        case 'Thunderstorm':
            nowWeather = '뇌우';
        case 'Drizzle':
            nowWeather = '소나기';
        case 'Rain':
            nowWeather = '비';
        case 'Snow':
            nowWeather = '눈';
        case 'Atmosphere':
            nowWeather = '안개';
        case 'Clouds':
            nowWeather = '흐림';
    }

    let navigate = useNavigate();

    const ImageClick = (e) => {
        setEmoji((prev) => prev === e.target.id ? "" : e.target.id);
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const requestData = {
        content: text,
        emoticon: emoji,
        keywords: [{ keyword: "연필" }],
        weather: nowWeather,
        foods: [{ name: "떡볶이" }],
        credat: nowDate,
        cretim: nowTime,
        musicId: 1,
        userNum: localStorage.getItem("usernum"),
        behaviors: [{ contents: "산책하기" }],
        emoticons: [{ content: "웃음" }]
    };

    const requestDiary = () => {
        axios.post(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/diary`, requestData, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
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

    // // DiaryPage에서 일기 post하고 MusicBehaviorPage에서 음악 get하는게 맞지 않나
    // const requestDiaryMusic = () => {
    //     axios.post('http://3.39.150.64:5001/music/diary', {
    //         params: {
    //             content: text
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data);
    //             alert('Success');
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             alert('fail');
    //         })
    // }

    const handleDiary = (e) => {
        e.preventDefault();
        if (text.length === 0 && emoji.length === 0) {
            alert('당신의 감정을 알려주세요!');
            return;
        }
        else {
            requestDiary();
            // requestDiaryMusic();
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
                        {
                            [
                                {
                                    text: "기쁨",
                                    imgUrl: 'media/Jdelight.png',
                                },
                                {
                                    text: "슬픔",
                                    imgUrl: 'media/Jsad.png',
                                },
                                {
                                    text: "분노",
                                    imgUrl: 'media/Jfury.png',
                                },
                                {
                                    text: "지루",
                                    imgUrl: 'media/Jboring.png',
                                },
                                {
                                    text: "감사",
                                    imgUrl: 'media/Jthank.png',
                                },
                                {
                                    text: "피로",
                                    imgUrl: 'media/Jfatigue.png',
                                },
                                {
                                    text: "스트레스",
                                    imgUrl: 'media/Jstress.png',
                                },
                                {
                                    text: "신남",
                                    imgUrl: 'media/Jexcited.png',
                                },
                            ].map((data) => (
                                <div key={data.text}>
                                    <img style={{ cursor: 'pointer' }} onClick={ImageClick} src={data.imgUrl} id={data.text} />
                                    <h3 style={{ color: emoji === data.text ? '#00ff43' : '#ffffff' }}>{data.text}</h3>
                                </div>
                            ))
                        }
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
    justify-content: space-evenly;
    margin-top: 3%;

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
            font-size: 11px;
        }

        img {
            width: 80%;
        }
    }
`