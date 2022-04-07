import React, {useEffect, useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Slick from "../molcules/Slick";
import axios from "axios";
import MusicThumbnail from "../atoms/MusicThumbnail";
import CustomButton from "../atoms/CustomButton";
import getLocation from "../atoms/GetLocation";

function MainPage(props) {
    const [musicArr, setMusicArr] = useState([]);
    const [thisMusic, setThisMusic] = useState([]);
    const [selected, setSelected] = useState({});
    const [selectedThis, setSelectedThis] = useState({});
    const [isPlay, setIsPlay] = useState(false);
    const [isPlayThis, setIsPlayThis] = useState(false);

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
        key: 'AIzaSyBa4owF0B7A0QCZu2dRXO4iv2bs3wLhFrk',
        part:'snippet',
        playlistId: 'PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m',
        maxResults : 10,
    }

    const params_this = {
        key: 'AIzaSyBa4owF0B7A0QCZu2dRXO4iv2bs3wLhFrk',
        part:'snippet',
        playlistId: 'PLg1XJ5kHmpzGkE1XpdcPUW0eb0PmKEfa0',
        maxResults : 10,
    }

    useEffect(() => {
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
                    <Slick src={thisMusic} />
                </div>
                <div id="1" className={'main'} style={{height: '100vh', fontSize: '1.5vw'}}>
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
                </div>
                <div id="2" className={'main'} style={{height: '100vh', fontSize: '1.5vw'}}>
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

                </div>
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
  }
  .main {
    padding-top: 80px;
  }
`

