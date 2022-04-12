import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Map from "../atoms/Map";
import CreateMap from "../atoms/CreateMap";
import { CircularProgress } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import smile1 from "../../media/smile1.png"
import sad from "../../media/sad.png"
import hamburger from "../../media/hamburger.png"

function RestaurantPage(props) {
    const [InputText, setInputText] = useState('')
    const [food, setFood] = useState('');
    const [loading, setLoading] = useState(true);


    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFood(InputText)
        setInputText('')
    }

    const handleClick = (e) => {
        setFood(e.target.id);
    }

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div style={{ width: '100%', marginBottom: '20%' }}>
                    <Fade direction={"up"} cascade={false}>
                        <div>
                            <h1 style={{ color: 'white', marginLeft: 80, fontSize: '4vw' }}>오늘 뭐 먹지?</h1>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h1 style={{ color: 'white', marginLeft: 80, marginRight: 100, fontSize: '4vw' }}>기분 <br />좋을 때도,</h1>
                            <img style={{ width: '30%' }} src={smile1} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h1 style={{ color: 'white', marginLeft: 80, marginRight: 100, fontSize: '4vw' }}>기분 <br />나쁠 때도,</h1>
                            <img style={{ width: '30%' }} src={sad} />
                        </div>
                        <div>
                            <h1 style={{ color: 'white', marginLeft: 80, fontSize: '4vw' }}>우리, <br />먹고는 살아야죠.</h1>
                        </div>
                    </Fade>
                </div>

                <div style={{ marginLeft: 80 }}>
                    <Fade direction={"up"} cascade={true}>
                        <div style={{ marginBottom: '5%' }}>
                            <h1 style={{ color: 'white', fontSize: '4vw', marginBottom: '2%' }}>여러분의 감정에 맞는 <br />맛있는 음식을 추천해드릴게요.</h1>
                            <h1 style={{ color: 'white', fontSize: '4vw' }}>지금 바로 주변 맛집을 확인해보세요.</h1>
                        </div>
                        {/*<form className="inputForm" onSubmit={handleSubmit}>*/}
                        {/*    <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />*/}
                        {/*    <button type="submit">검색</button>*/}
                        {/*</form>*/}
                    </Fade>

                    <div style={{ display: 'flex' }}>
                        <Fade direction={"up"} cascade={false}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {/* <img style={{ width: '100%' }} src={hamburger} onClick={handleClick} id={'햄버거'} />
                                    햄버거 */}
                                <button style={{ width: '70px', height: '70px' }} onClick={handleClick} id={'햄버거'}>햄버거</button> 
                                <button style={{ width: '70px', height: '70px' }} onClick={handleClick} id={'카페'}>카페</button>
                                <button style={{ width: '70px', height: '70px' }} onClick={handleClick} id={'스시'}>스시</button>
                            </div>

                            <div style={{ marginLeft: 80, width: '60vw', height: '60vh', backgroundColor: 'white' }}>
                                <CreateMap food={food} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}

export default RestaurantPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3300px;
  padding-top: 120px;
  background-color: black;
`