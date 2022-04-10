import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import music1 from "../../media/music1.png"
import music2 from "../../media/music2.png"
import music3 from "../../media/music3.png"
import music4 from "../../media/music4.png"
import smile1 from "../../media/smile1.png"
import sad from "../../media/sad.png"
import { Fade } from "react-awesome-reveal";

function MusicBehaviorPage(props) {
    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div style={{ marginBottom: '20%'}}>
                        <div style={{width: '100%'}}>
                            <Fade direction={"up"} cascade={false}>
                                <h1 style={{color: 'white', marginLeft: 80, fontSize: '5vw'}}>기분 좋을 때,</h1>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width: '30%'}} src={smile1}/>
                                    <img style={{width: '30%'}} src={smile1}/>
                                    <img style={{width: '30%'}} src={smile1}/>
                                </div>
                                <h1 style={{color: 'white', marginLeft: 80, fontSize: '5vw'}}>산책과 함께</h1>
                                <h1 style={{color: 'white', marginLeft: 80, fontSize: '5vw'}}>이런 노래 어떠세요?</h1>
                            </Fade>
                        </div>
                </div>

                <div style={{display: 'flex'}}>
                    <div style={{ marginLeft: '5%', marginTop: '2%', color: 'white', backgroundColor: 'black', width: '50%'}}>
                        <Fade direction={"down"} cascade={true}>
                            <div style={{display: 'flex'}}>
                                <img style={{width: '40%'}} src={music1}/>
                                <img style={{width: '40%'}} src={music2}/>
                            </div>
                            <div style={{display: 'flex'}}>
                                <img style={{width: '40%'}} src={music3}/>
                                <img style={{width: '40%'}} src={music4}/>
                            </div>
                        </Fade>
                    </div>
                    <div style={{width: '40%', marginTop: '5%'}}>
                        <Fade direction={"up"} cascade={true}>
                            <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>혹은 운동과 함께</h1>
                            <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>음악들을 감상해보세요.</h1>
                        </Fade>
                    </div>
                </div>

            </PageContainer>
        </div>
    );
}

export default MusicBehaviorPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
  .slick {
    margin: auto;
    width: 95%;
    height: 90vh;
  }
`