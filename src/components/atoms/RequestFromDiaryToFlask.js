import React from 'react';
import axios from "axios";

async function RequestFromDiaryToFlask(userNum, refineClickVal, setRecommendInfo, setLoading) {
    await axios.get(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/mypage/${userNum}`, {
        params: {
            credat: refineClickVal
        },
        headers: {
            ['x-user-num']: localStorage.getItem("usernum"),
            ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
        }
    })
        .then((res) => {
            console.log(res.data)
            if (res.data === '') {
                alert("등록된 일기가 없습니다. 일기를 작성해주세요.");
                return false;
            } else {
                const requestData = res.data;
                const diaryNum = requestData.diaryNum;
                const content = requestData.content;
                const emoticons = requestData.emoticons;
                const foods = requestData.foods;
                const keywords = requestData.keywords;
                const behaviors = requestData.behaviors;
                const weather = requestData.weather;
                axios.post(`http://3.39.150.64:5001/music/diary`,
                    {
                        content: content,
                        keywords: [],
                        emoticons: [emoticons[0].content]
                    })
                    .then(res => {
                        console.log(res.data);
                        setRecommendInfo({
                            behaviorList: res.data.behaviorList,
                            foodList: res.data.foodList,
                            keywordList: res.data.keywordList,
                            musicList: res.data.musicList,
                            musicList2: res.data.musicList2,
                            emotion: res.data.emotion,
                            diaryNum: diaryNum,
                            content: content,
                            emoticons: emoticons,
                            foods: foods,
                            keywords: keywords,
                            behaviors: behaviors,
                            weather: weather
                        });
                        setLoading(false);
                    })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    return true;
}

export default RequestFromDiaryToFlask;