import React, {useEffect, useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Slick from "../molcules/Slick";
import axios from "axios";
import MusicThumbnail from "../atoms/MusicThumbnail";
import GetUserTime from '../atoms/GetUserTime';

function MainPage(props) {
    const [musicArr, setMusicArr] = useState([]);
    const [thisMusic, setThisMusic] = useState([]);
    const [selected, setSelected] = useState({});
    const [selectedThis, setSelectedThis] = useState({});
    const [isPlay, setIsPlay] = useState(false);
    const [isPlayThis, setIsPlayThis] = useState(false);
    const [flaskMusicList, setFlaskMusicList] = useState([]);
    const userTime = GetUserTime();

    const handleClick = (e) => {
        setIsPlay(false);
        setSelected({...selected, id: e.target.id, alt: e.target.alt, src: e.target.src});
    }

    const handleClickThis = (e) => {
        setIsPlayThis(false);
        setSelectedThis({...selectedThis, id: e.target.id, alt: e.target.alt, src: e.target.src});
    }

    const handlePlayClick = () => {
        setIsPlay(true);
    }

    const handlePlayClickThis = () => {
        setIsPlayThis(true);
    }

    const params = {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part:'snippet',
        playlistId: 'PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m',
        maxResults : 10,
    }

    const params_this = {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part:'snippet',
        playlistId: 'PLg1XJ5kHmpzGkE1XpdcPUW0eb0PmKEfa0',
        maxResults : 10,
    }

    useEffect(() => {
        axios.get('http://3.39.150.64:5001/music/weather', { 
            params: {
                weather: '맑음', time: '14:11' 
            }
        })
            .then((res) => {
                setFlaskMusicList(res.data);
                console.log(res.data);
                alert('success');
            })
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {params: params})
            .then(res => {
                const arr = []
                res.data.items.map(item => {
                    arr.push(item.snippet);
                })
                setMusicArr(arr);
            })
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {params: params_this})
            .then(res => {
                const arr = []
                res.data.items.map(item => {
                    arr.push(item.snippet);
                })
                setThisMusic(arr);
            })
    }, [])

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div className={'slick'}>
                    <Slick src={thisMusic} thisMusic={thisMusic} famous={musicArr} />
                </div>
                <Div id="1" className={'main'}>
                    <h1 style={{color: 'white', marginLeft: '3rem'}}>오늘 이 노래 어떠세요?</h1>
                    <MusicThumbnail src={thisMusic} handleClick={handleClickThis}/>
                    <div style={{ height: '55%', display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: "30%", height: '100%'}}>
                            <div style={{width: '100%'}}>
                                <img style={{width: '80%'}} src={selectedThis.src}/>
                            </div>
                            <p style={{color: 'white', width: '80%', marginTop: 0}}>{selectedThis.alt}</p>
                            {Object.keys(selectedThis).length !== 0 && <CustomButton onClick={handlePlayClickThis}>Play Now</CustomButton>}
                        </div>
                        {(Object.keys(selectedThis).length !== 0 && isPlayThis === true) ?
                            <iframe width="60%" height="100%" src={`https://www.youtube.com/embed/${selectedThis.id}?autoplay=1`}
                                    title="YouTube video player" frameBorder="0" id={'play'}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            :
                            <h1 style={{width:"60%", height: '100%', color: 'white', textAlign: 'center'}}>재생 버튼을 눌러주세요.</h1>
                        }
                    </div>
                </Div>
                <Div id="2" className={'main'}>
                    <h1 style={{color: 'white', marginLeft: '3rem'}}>이번 주 인기 음악</h1>
                    <MusicThumbnail src={musicArr} handleClick={handleClick}/>
                    <div style={{ height: '55%', display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: "30%", height: '100%'}}>
                            <div style={{width: '100%'}}>
                                <img style={{width: '80%'}} src={selected.src}/>
                            </div>
                            <p style={{color: 'white', width: '80%', marginTop: 0}}>{selected.alt}</p>
                            {Object.keys(selected).length !== 0 && <CustomButton onClick={handlePlayClick}>Play Now</CustomButton>}
                        </div>
                        {(Object.keys(selected).length !== 0 && isPlay === true) ?
                            <iframe width="60%" height="100%" src={`https://www.youtube.com/embed/${selected.id}?autoplay=1`}
                                    title="YouTube video player" frameBorder="0" id={'play'}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            :
                            <h1 style={{width:"60%", color: 'white', textAlign: 'center'}}>재생 버튼을 눌러주세요.</h1>
                        }
                    </div>

                </Div>
            </PageContainer>
        </div>
    );
}

export default MainPage;

const PageContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  background-color: black;
  .slick {
    margin: auto;
    width: 80%;
    height: 95vh;
    @media screen and (max-width: 700px) {
      height: 40vh;
    }
  }
  .main {
    padding-top: 80px;
  }
`

const Div = styled.div`
  height: 100vh;
  font-size: 1.5vw;
  @media screen and (max-width: 700px) {
    height: 70vh;
  }
`;

const CustomButton = styled.button`
  width: 60%;
  height: 10%;
  font-size: 70%;
  border: none;
  background-color: #1e1f21;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  float: left;
  margin-top: 10px;
  //margin-right: 5%;
  cursor: pointer;
  display: block;
`;