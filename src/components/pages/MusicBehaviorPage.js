import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import music1 from "../../media/music1.png"
import music2 from "../../media/music2.png"
import music3 from "../../media/music3.png"
import music4 from "../../media/music4.png"
import music5 from "../../media/this1.png"
import smile1 from "../../media/smile1.png"
import sad from "../../media/sad.png"
import { Fade } from "react-awesome-reveal";

function MusicBehaviorPage(props) {
    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <RecomContainer>
                    <div style={{width: '100%', marginBottom: '20%'}}>
                        <Fade direction={"up"} cascade>
                            <h1>기분 좋을 때,</h1>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img style={{width: '30%'}} src={smile1}/>
                                <img style={{width: '30%'}} src={smile1}/>
                                <img style={{width: '30%'}} src={smile1}/>
                            </div>
                            <h1>산책과 함께</h1>
                            <h1>이런 노래 어떠세요?</h1>
                        </Fade>
                    </div>
                </RecomContainer>
                <FlexContainer>
                    <div style={{ marginLeft: '5%', marginTop: '2%', marginBottom: '10%', color: 'white', backgroundColor: 'black', width: '50%'}}>
                        <Fade direction={"up"} cascade={true}>
                            <div style={{display: 'flex'}}>
                                <img style={{width: '36%'}} src={music1}/>
                                <img style={{width: '36%'}} src={music2}/>
                                <img style={{width: '36%'}} src={music3}/>
                                <img style={{width: '36%'}} src={music4}/>
                                <img style={{width: '36%'}} src={music5}/>
                            </div>
                        </Fade>
                    </div>
                    <div style={{width: '100%'}}>
                        <Fade direction={"down"} cascade={true}>
                            <h1>혹은 운동과 함께</h1>
                            <h1>음악들을 감상해보세요.</h1>
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
  margin-bottom: 30%;
  h1 {
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