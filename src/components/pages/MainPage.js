import React, {useEffect, useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Slick from "../molcules/Slick";
import axios from "axios";
import MusicThumbnail from "../atoms/MusicThumbnail";

function MainPage(props) {
    const [musicArr, setMusicArr] = useState([]);
    const randomNum = Math.floor(Math.random() * 10);
    const [selected, setSelected] = useState(null);

    const handleClick = (e) => {
        setSelected(e.target.id);
    }

    const params = {
        key: 'AIzaSyBa4owF0B7A0QCZu2dRXO4iv2bs3wLhFrk',
        part:'snippet',
        playlistId: 'PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m',
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
    }, [])

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div className={'slick'}>
                    <Slick />
                </div>
                <div id="1" className={'main'} style={{height: '100vh', fontSize: '1.5vw'}}>
                    <h1 style={{color: 'white', textAlign: 'center'}}>오늘 이 노래 어떠세요?</h1>
                    <MusicThumbnail src={musicArr} handleClick={handleClick}/>
                    {selected !== null ?
                        <iframe width="100%" height="55%" src={`https://www.youtube.com/embed/${selected}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        :
                        <h1 style={{color: 'white', textAlign: 'center'}}>노래를 선택해주세요.</h1>
                    }
                </div>
                <div id="2" className={'main'} style={{height: '100vh', fontSize: '1.5vw'}}>
                    <h1 style={{color: 'white', textAlign: 'center'}}>이번 주 인기 음악</h1>
                    <MusicThumbnail src={musicArr} handleClick={handleClick}/>
                    {selected !== null ?
                        <iframe width="100%" height="55%" src={`https://www.youtube.com/embed/${selected}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        :
                        <h1 style={{color: 'white', textAlign: 'center'}}>노래를 선택해주세요.</h1>
                    }
                </div>
            </PageContainer>
        </div>
    );
}

export default MainPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
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

