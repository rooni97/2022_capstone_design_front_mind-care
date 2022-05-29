import React, {useEffect, useMemo, useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import moment from "moment";
import {useRecoilState} from "recoil";
import {MusicArr, RecommendInfo} from "../../store/RecommendInfo";
import RequestFromDiaryToFlask from "../atoms/RequestFromDiaryToFlask";
import {useNavigate} from "react-router-dom";
import {IoReload} from "react-icons/io5";
import PlayMusicModal from "../atoms/PlayMusicModal";
import {CircularProgress} from "@mui/material";

function MusicBehaviorPage(props) {
    const [clickVal, setClickVal] = useState(new Date());
    const refineClickVal = useMemo(() => moment(clickVal).format("YYYYMMDD"), [clickVal]);
    const userNum = localStorage.getItem("usernum")
    const [recommendInfo, setRecommendInfo] = useRecoilState(RecommendInfo);
    let navigate = useNavigate();

    const sendHeart = () => {
        alert("좋아요가 저장되었습니다.");
        const diaryNum = recommendInfo.diaryNum;
        const content = recommendInfo.content;
        let keywords = [];
        for (let i = 0; i < 1; i++) {
            let tmp = {...recommendInfo.keywords[i]};
            tmp['keyword'] = recommendInfo.keywordList[i];
            keywords.push(tmp)
        }
        let foods = [];
        for (let i = 0; i < 3; i++) {
            let tmp = {...recommendInfo.foods[i]};
            tmp['name'] = recommendInfo.foodList[i];
            foods.push(tmp)
        }
        let behaviors = [];
        for (let i = 0; i < 1; i++) {
            let tmp = {...recommendInfo.behaviors[i]};
            tmp['contents'] = recommendInfo.behaviorList[0];
            behaviors.push(tmp)
        }
        axios.put(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/diary/${diaryNum}`, {
            content: content,
            userNum: localStorage.getItem("usernum"),
            musicId: videoId,
            keywords: keywords,
            foods: foods,
            behaviors: behaviors,
            emotion: recommendInfo.emotion,
            emoticons: recommendInfo.emoticons,
            weather: recommendInfo.weather
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
    }
    const [loading, setLoading] = useState(true);
    const [musicLoading, setMusicLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const handleOpen = (e) => {
        console.log(e.target.id)
        setVideoId(e.target.id);
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false);
    }
    const [page, setPage] = useState(0);
    const handleReload = () => {
        setPage((prev) => (prev+1)%2);
    }
    const [musicArr, setMusicArr] = useRecoilState(MusicArr);
    const params = {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: 'snippet',
        playlistId: 'PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m',
        maxResults: 20,
    }

    const flaskToYoutube = async (keywords) => {
        console.log(keywords);
        const params = {
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: 'snippet',
            maxResults: 1,
        }
        // await axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     params: {
        //         key: process.env.REACT_APP_YOUTUBE_API_KEY,
        //         part: 'snippet',
        //         q: keyword,
        //         maxResults: 1,
        //     }
        // })
        //     .then(res => {
        //         console.log(res.data.items)
        //         setMusicArr([...musicArr, res.data.items]);
        //     })
        axios.all([
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[0]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[1]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[2]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[3]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[4]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[5]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[6]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[7]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[8]}
            }),
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {...params, q: keywords[9]}
            }),
        ])
            .then(
                axios.spread((res1, res2, res3, res4, res5, res6, res7, res8, res9, res10) => {
                    const data1 = { id: res1.data.items[0].id, snippet: res1.data.items[0].snippet };
                    const data2 = { id: res2.data.items[0].id, snippet: res2.data.items[0].snippet };
                    const data3 = { id: res3.data.items[0].id, snippet: res3.data.items[0].snippet };
                    const data4 = { id: res4.data.items[0].id, snippet: res4.data.items[0].snippet };
                    const data5 = { id: res5.data.items[0].id, snippet: res5.data.items[0].snippet };
                    const data6 = { id: res6.data.items[0].id, snippet: res6.data.items[0].snippet };
                    const data7 = { id: res7.data.items[0].id, snippet: res7.data.items[0].snippet };
                    const data8 = { id: res8.data.items[0].id, snippet: res8.data.items[0].snippet };
                    const data9 = { id: res9.data.items[0].id, snippet: res9.data.items[0].snippet };
                    const data10 = { id: res10.data.items[0].id, snippet: res10.data.items[0].snippet };
                    const res = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10];
                    setMusicArr(res);
                    setMusicLoading(false);
                })
            )
    }

    useEffect(async () => {
        if (recommendInfo.behaviorList.length === 0) {
            const isExist = await RequestFromDiaryToFlask(userNum, refineClickVal, setRecommendInfo, setLoading);
            if (!isExist) {
                navigate('/diary')
                console.log(isExist)
            } else {
                // axios.get('https://www.googleapis.com/youtube/v3/playlistItems', { params: params })
                //     .then(res => {
                //         const arr = []
                //         res.data.items.map(item => {
                //             arr.push(item.snippet);
                //         })
                //         setMusicArr(arr);
                //     })

            }

        }
    }, []);

    useEffect(async () => {
        // for (let i = 0; i < 10; i++) {
        //     let music = recommendInfo.musicList[i];
        //     await flaskToYoutube(music[0] + " " + music[1]);
        // }
        if (musicArr.length === 0 && recommendInfo.musicList.length > 0) {
            let keywords = [];
            recommendInfo.musicList.map(m => {
                keywords.push(m[0] + " " + m[1]);
            })
            await flaskToYoutube(keywords);
            console.log(keywords)
            console.log(musicArr);
        }
    }, [recommendInfo]);

    useEffect(() => {
        console.log(musicArr);
    }, [])

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <RecomContainer>
                    <div style={{width: '100%', marginBottom: '20%'}}>
                        <Fade direction={"up"} cascade>
                            <h1>감정에 맞는 행동을 추천해드릴게요.</h1>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img style={{width: '30%'}} src={'media/smile1.png'}/>
                                <img style={{width: '30%'}} src={'media/smile1.png'}/>
                                <img style={{width: '30%'}} src={'media/smile1.png'}/>
                            </div>
                            {/*{recommendInfo && <h1>{recommendInfo.behaviorList[1]}</h1>}*/}
                            {loading ? <CircularProgress size={100} sx={{margin: '0 45%'}} /> : <h1>{recommendInfo.behaviorList[1]}</h1>}
                        </Fade>
                    </div>
                </RecomContainer>
                <FlexContainer>
                    <div style={{ marginLeft: '5%', marginTop: '2%', color: 'white', backgroundColor: 'black', width: '50%'}}>
                        <Fade direction={"up"} cascade={true}>
                            <div style={{marginBottom: '5%'}}>
                                <IoReloadCustom onClick={handleReload} />
                            </div>
                            <div style={{display: 'flex'}}>
                                {musicLoading ? <CircularProgress size={50} sx={{margin: '0 45%'}} /> : <>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 0].id.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 0].snippet.thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 1].id.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 1].snippet.thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 2].id.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 2].snippet.thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 3].id.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 3].snippet.thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 4].id.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 4].snippet.thumbnails.high.url}/>
                                    <PlayMusicModal open={open} handleClose={handleClose} videoId={videoId} sendHeart={sendHeart}/>
                                </>}
                            </div>
                        </Fade>
                    </div>
                    <div style={{width: '100%'}}>
                        <Fade direction={"down"} cascade={true}>
                            {/*{recommendInfo && <h1>{recommendInfo.behaviorList[0]}</h1>}*/}
                            {loading ? <CircularProgress size={50} sx={{margin: '0 45%'}} /> : <h1>{recommendInfo.behaviorList[0]}</h1>}
                            <h1> + </h1>
                            <h1>추천된 음악들도 감상해보세요.</h1>
                        </Fade>
                    </div>
                </FlexContainer>
            </PageContainer>
        </div>
    );
}

export default MusicBehaviorPage;

const PageContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  background-color: black;
`;

const RecomContainer = styled.div`
  height: 80vh;
  margin-bottom: 20%;
  h1 {
    width: 90%;
    color: white;
    margin-left: 5%;
    font-size: 5vw;
    @media screen and (max-width: 700px) {
      font-size: 5vh;
    }
  }
`;

const FlexContainer = styled.div`
  height: 100vh;
  h1 {
    color: white;
    margin-left: 5%;
    font-size: 4vw;
    @media screen and (max-width: 700px) {
      font-size: 4vh;
    }
  }
`;

const IoReloadCustom = styled(IoReload)`
  color: white;
  font-size: 5vw;
  cursor: pointer;
  :hover {
    color: #888888;
  }
  :active {
    transform: scale(0.95);
  }
`