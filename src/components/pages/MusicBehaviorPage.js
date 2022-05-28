import React, {useEffect, useMemo, useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import moment from "moment";
import {useRecoilState} from "recoil";
import {RecommendInfo} from "../../store/RecommendInfo";
import RequestFromDiaryToFlask from "../atoms/RequestFromDiaryToFlask";
import {useNavigate} from "react-router-dom";
import {IoReload} from "react-icons/io5";
import PlayMusicModal from "../atoms/PlayMusicModal";

function MusicBehaviorPage(props) {
    const [clickVal, setClickVal] = useState(new Date());
    const refineClickVal = useMemo(() => moment(clickVal).format("YYYYMMDD"), [clickVal]);
    const userNum = localStorage.getItem("usernum")
    const [recommendInfo, setRecommendInfo] = useRecoilState(RecommendInfo);
    let navigate = useNavigate();

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
        setPage((prev) => (prev+1)%4);
    }
    const [musicArr, setMusicArr] = useState([]);
    const params = {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: 'snippet',
        playlistId: 'PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m',
        maxResults: 20,
    }

    useEffect(() => {
        if (recommendInfo.behaviorList.length === 0) {
            let isExist = RequestFromDiaryToFlask(userNum, refineClickVal, setRecommendInfo);
            if (!isExist) {
                navigate('/diary')
            }
            axios.get('https://www.googleapis.com/youtube/v3/playlistItems', { params: params })
                .then(res => {
                    const arr = []
                    res.data.items.map(item => {
                        arr.push(item.snippet);
                    })
                    console.log(arr);
                    setMusicArr(arr);
                })
        }
    }, []);

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
                            {recommendInfo && <h1>{recommendInfo.behaviorList[1]}</h1>}
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
                                {musicArr.length > 0 && <>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 0].resourceId.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 0].thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 1].resourceId.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 1].thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 2].resourceId.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 2].thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 3].resourceId.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 3].thumbnails.high.url}/>
                                    <img onClick={handleOpen} id={musicArr[page*5 + 4].resourceId.videoId} style={{width: '36%', cursor: 'pointer'}} src={musicArr[page*5 + 4].thumbnails.high.url}/>
                                    <PlayMusicModal open={open} handleClose={handleClose} videoId={videoId}/>
                                </>}
                            </div>
                        </Fade>
                    </div>
                    <div style={{width: '100%'}}>
                        <Fade direction={"down"} cascade={true}>
                            {recommendInfo && <h1>{recommendInfo.behaviorList[0]}</h1>}
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