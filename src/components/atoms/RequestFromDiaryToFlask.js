import React from 'react';
import axios from "axios";

function RequestFromDiaryToFlask(userNum, refineClickVal, setRecommendInfo) {
    axios.get(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/mypage/${userNum}`, {
        params:{
            credat: refineClickVal
        },
        headers: {
            ['x-user-num']: localStorage.getItem("usernum"),
            ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
        }
    })
        .then((res) => {
            if (res.data[0] === undefined) {
                alert("등록된 일기가 없습니다. 다이어리 페이지로 이동합니다.");
                return false;
            } else {
                const requestData = res.data[0];
                const diaryNum = requestData.diaryNum;
                const content = requestData.content;
                axios.post(`http://3.39.150.64:5001/music/diary`,
                    {
                        content: content,
                        keywords: ["바다", "달"],
                        emoticons: ["기쁨"]
                    })
                    .then(res => {
                        console.log(res.data);
                        setRecommendInfo({
                            behaviorList: res.data.behaviorList,
                            foodList: res.data.foodList,
                            keywordList: res.data.keywordList,
                            musicList: res.data.musicList,
                            musicList2: res.data.musicList2
                        });
                        // requestData['foods'] = [{ name: res.data.foodList[0] }, { name: res.data.foodList[1] }, { name: res.data.foodList[2] }];
                        // requestData['behaviors'] = [ {contents: res.data.behaviorList[0]} ];
                        // requestData['emoticon'] = [];
                        // requestData['emoticons'] = [{content: res.data}];
                        axios.put(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/diary/${diaryNum}`, {
                            content: content,
                            keywords: [{ keyword: "연필" }],
                            foods: [{ name: "떡볶이" }],
                            behaviors: [{ contents: "산책하기" }],
                            emoticons: [{ content: "웃음" }]
                        }, {
                            headers: {
                                ['x-user-num']: localStorage.getItem("usernum"),
                                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
                            }
                        })
                            .then((res) => {
                                console.log(res.data);
                            })
                            .catch((err) => {
                                console.log(err);
                                alert('fail');
                            })
                    })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    return true;
}

export default RequestFromDiaryToFlask;